import "./Events.css";
import { useState } from "react";

const events = [
  { day: "5-9", month: "JAN", title: "Submission of Reports" , location: "HEADQUATERS · 9:00 AM – 8:00 PM" },
  { day: "8-11", month: "JAN", title: "National Children's Festival",  location: "ALL STATIONS " },
  { day: "10", month: "JAN", title: "National Executive Committe Meeting",  location: "Conference Hall · 12:00 PM – 3:00 PM"  },
  { day: "4-10", month: "FEB", title: "ZIMADEY",   location: "STATIONS " },
  { day: "11-16", month: "FEB", title: "I'ODOMEY CONFERENCE", location: "CIRCUITS" },
  { day: "12-30", month: "MAR", title: "Church Centenary Activities",   location: "DISTRICTS "},
  { day: "1-26", month: "APR", title: "Church Centenary Activities",  location: "DISTRICTS"},
  { day: "10", month: "MAY", title: "Worker's Appreciation Service",  location: "STATIONS  · 9:00 AM – 12:00 PM"},
  { day: "19-24", month: "MAY", title: "May Finusifm", location: "Main Sanctuary "  },
  { day: "22-28", month: "JUN", title: "AKATITIBI MEMORIAL WEEK", location: "STATIONS "  },
  { day: "25-28", month: "JUN", title: "Mehu Anniversary", location: "SENCHI "  },
  { day: "4", month: "JUL", title: "National Executive Committe Meeting", location: "Conference Hall · 12:00 PM – 3:00 PM "  },
  { day: "6-12", month: "JUL", title: "Feast of Peace Offering System", location: "STATIONS "  },
  { day: "28-31", month: "JUL", title: "Feast of Peace Offering System", location: "CIRCUITS "  },
  { day: "1-2", month: "AUG", title: "Feast of Peace Offering System", location: "DISTRICTS"  },
  { day: "22-31", month: "AUG", title: "ASOMDWEE AFE", location: "Main Sanctuary/HEADQUATERS "  },
  { day: "1-6", month: "SEP", title: "AKABOHA II MEMORIAL DAY", location: "Main Sanctuary/HEADQUARTERS "  },
  { day: "21-27", month: "SEP", title: "AKABOHA I MEMORIAL WEEK", location: "STATIONS "  },
  { day: "12-16", month: "OCT", title: "October In-Service Training", location: "Main Sanctuary "  },
  { day: "19-22", month: "OCT", title: "SEENIM Conductors Fasting/Workshop", location: "Main Sanctuary "  },
  { day: "5-30", month: "NOV", title: "SEENIM and Discosasett", location: "CIRCUITS "  },
  { day: "11", month: "NOV", title: "11-11 Observance", location: "STATIONS "  },
  { day: "1-20", month: "DEC", title: "SEENIM and Discosasett", location: "CIRCUITS "  },
  { day: "31", month: "DEC", title: "Worker's Pension Scheme Special Fund", location: "CIRCUITS "  },

];

const months = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC",
];

const Events = () => {
  const [openMonth, setOpenMonth] = useState(null);

  const toggleMonth = (month) => {
    setOpenMonth(openMonth === month ? null : month);
  };

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="events-hero">
        <div className="container text-center">
          <p className="events-hero-subtitle">✦ Mark Your Calendar</p>
          <h1 className="events-hero-title">Upcoming Events</h1>
        </div>
      </section>

      {/* ── Month Accordion List ── */}
      <section className="events-list">
        <div className="container">

          {months.map((month) => {
            const monthEvents = events.filter((e) => e.month === month);
            const isOpen = openMonth === month;

            return (
              <div key={month} className="month-box">

                {/* Month header */}
                <div
                  className="month-header"
                  onClick={() => toggleMonth(month)}
                >
                  <h2>{month}</h2>
                  <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 0.25s" }}>
                    ▼
                  </span>
                </div>

                {/* Dropdown events */}
                {isOpen && (
                  <div className="month-events">
                    {monthEvents.length === 0 ? (
                      <p className="no-events">No events scheduled this month</p>
                    ) : (
                      monthEvents.map((event, i) => (
                        <div key={i} className="events-card">

                          {/* Date tile */}
                          <div className="date-box">
                            <p className="events-card-day">{event.day}</p>
                          </div>

                          {/* Text */}
                          <div className="flex-1">
                            <h3 className="events-card-title">{event.title}</h3>
                            <p className="events-card-location">{event.location}</p>
                          </div>

                          {/* Tag */}
                          <span className="events-card-tag">{event.tag}</span>

                        </div>
                      ))
                    )}
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};

export default Events;
