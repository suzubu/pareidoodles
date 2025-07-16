import React from "react";
import "../styles/App.css"; // or a separate CSS if you prefer

export default function SelectionBox({ startX, startY, currentX, currentY }) {
  const left = Math.min(startX, currentX);
  const top = Math.min(startY, currentY);
  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);

  return (
    <div
      className="selection-box"
      style={{
        left,
        top,
        width,
        height,
      }}
    ></div>
  );
}
