import React, { useState } from "react";

export default function ColorPickerMenu({
  currentColor,
  colorPalette,
  onColorChange,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "2px solid #333",
          backgroundColor: currentColor || "#ccc",
          cursor: "pointer",
        }}
        title="Change Color"
      ></button>

      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "4px",
            display: "flex",
            gap: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,
          }}
        >
          {colorPalette.map((col) => (
            <div
              key={col}
              onClick={() => {
                onColorChange(col);
                setShowMenu(false);
              }}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: col,
                border: "2px solid #333",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
