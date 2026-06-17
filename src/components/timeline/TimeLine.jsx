import React from "react";
import { Themes } from "../theme/Themes";
import Linha from "./Line";
import CardTimeLine from "./CardTimeLine";
import { Translations } from "../translation/Translation";
import "./index.css"

const TimeLine = ({ language, theme }) => {
  const c = Themes[theme];
  const t = Translations[language];

  const timelineData = t.timeline.items;
  const isDark = theme === "dark"

  return (
    <section
      style={{
        backgroundColor: c.background,
        color: c.text,
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', system-ui, sans-serif"
      }}
    >
      <h1
        id='trajectory'
        style={{
          color: c.text,
          fontFamily: 'Bebas Neue',
          fontSize: 60,
          textAlign: 'center',
          paddingTop: 60,
          paddingBottom: 50
        }}
      >
        {t.timeline.sectionTitle}
      </h1>
      <div
        className={`custom-scroll ${isDark ? "dark-scroll" : "light-scroll"}`}
        style={{ maxWidth: "720px", maxHeight: "70vh", margin: "0 auto", overflowY: "auto", paddingRight: "10px" }}
      >
        <div style={{ position: "relative", paddingLeft: "40px" }}>
          <Linha theme={theme} />

          {timelineData.map((item, index) => (
            <div key={index} style={{ position: "relative", marginBottom: index === timelineData.length - 1 ? 0 : "1.5rem" }}>
              <span
                style={{
                  position: "absolute",
                  left: "-33px",
                  top: "22px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: item.current ? "#212529" : "#fff",
                  border: `2px solid ${isDark ? "#fff" : "#212529"}`,
                  zIndex: 2,
                }}
              />

              <CardTimeLine item={item} theme={theme} language={language} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;