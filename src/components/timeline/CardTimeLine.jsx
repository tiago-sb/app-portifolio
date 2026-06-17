import React from "react";
import { Translations } from "../translation/Translation";
import { Themes } from "../theme/Themes";

const CardTimeLine = ({ language, theme, item }) => {
  const t = Translations[language];
  const c = Themes[theme];
  const status = item.current ? t.timeline.inProgress : t.timeline.finished;
  const isDark = theme === "dark"

  return (
    <div
      className="card shadow-sm border-0 mb-3"
      style={{
        backgroundColor: c.background,
        color: c.text
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h5 className="card-title mb-2" style={{ fontFamily: 'Bebas Neue' }}>{item.title}</h5>

            <p className="card-text mb-1" style={{ fontFamily: 'Poppins' }}>
              <strong>Período:</strong> {item.period}
            </p>
          </div>

          <span
            className={`badge rounded-pill ${item.current ? "bg-secondary" : "bg-success"
              }`}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.05em",
              fontWeight: 500,
              padding: "0.5rem 0.85rem"
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTimeLine;