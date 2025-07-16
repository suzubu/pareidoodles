import React, { useState } from "react";

export default function ColorPickerMenu({
  currentColor,
  colorPalette,
  onColorChange,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="color-picker-wrapper">
      <button
        className="color-picker-button"
        onClick={() => setShowMenu(!showMenu)}
        title="Change Color"
      >
        <div
          className="color-picker-inner"
          style={{ backgroundColor: currentColor || "#ccc" }}
        ></div>
      </button>

      {showMenu && (
        <div className="color-picker-menu">
          {colorPalette.map((col) => (
            <div
              key={col}
              className="color-picker-swatch"
              style={{ backgroundColor: col }}
              onClick={() => {
                onColorChange(col);
                setShowMenu(false);
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
