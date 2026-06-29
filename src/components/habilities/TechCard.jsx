import { useState } from "react";
import { Themes } from "../theme/Themes";

export const TechCard = ({ name, icon, description, level, theme }) => {
  const c = Themes[theme];
  const [hovered, setHovered] = useState(false);

  const Icon = typeof icon === "function" ? icon : null;

  return (
    <div
      className="card text-center flex-shrink-0"
      style={{
        width: 148,
        backgroundColor: c.background,
        border: `1.5px solid ${hovered ? c.primary : "transparent"}`,
        color: c.text,
        cursor: "default",
        overflow: "hidden",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-body d-flex flex-column align-items-center p-2">
        { Icon ?
          <Icon size={44} className="mb-2" color={c.primary} /> :
          <img src={icon} alt={name} className="mb-2" style={{ width: 44, height: 44, objectFit: "contain" }} /> 
        }

        <div className="d-flex flex-column align-items-center w-100 gap-1">
          <span className="text-capitalize fw-medium" style={{ fontSize: 13, color: c.text }}>
            {name}
          </span>

          <div className="progress w-100" style={{ height: 3, backgroundColor: "rgba(128,128,128,0.2)" }} >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${level}%`,
                backgroundColor: c.primary,
              }}
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <span
            style={{
              fontSize: 11,
              opacity: 0.6,
              color: c.text,
            }}
          >
            {level}%
          </span>
        </div>

        <div
          className="w-100 overflow-hidden"
          style={{
            maxHeight: hovered ? 120 : 0,
            marginTop: hovered ? 10 : 0,
            transition: "max-height 0.3s ease, margin-top 0.3s ease",
          }}
        >
          <p
            className="mb-0 pt-2 border-top"
            style={{
              fontSize: 12,
              lineHeight: 1.5,
              opacity: 0.8,
              color: c.text,
              borderColor: "rgba(128,128,128,0.2)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};