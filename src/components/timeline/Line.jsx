import React from "react";
import { Themes } from "../theme/Themes";

const Linha = ({ theme }) => {
  const c = Themes[theme]
  
  const isDark = theme === "dark"
  
  return (
    <div
      style={{
        position: "absolute",
        left: "12px",
        top: 0,
        height: "100%",
        width: "2px",
        backgroundColor: isDark ? "#fff" : "#212529"
      }}
    />
  );
};

export default Linha;