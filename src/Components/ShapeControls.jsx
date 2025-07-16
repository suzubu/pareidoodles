// src/Components/ShapeControls.jsx
import React, { useState } from "react";
import ColorPickerMenu from "./ColorPickerMenu";
// icons (use your existing imports)
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
  UilPlusCircle,
  UilMinusCircle,
  UilCopy,
  UilFlipV,
} from "@iconscout/react-unicons";

export default function ShapeControls({
  currentColor,
  onTransformSelected,
  onDuplicateSelected,
  onFlipSelectedX,
  onFlipSelectedY,
  onColorChange,
  colorPalette,
}) {

  return (
    <div
      className="shape-tools"
      style={{
        zIndex: 9999,
        position: "absolute",
        top: "-50px",
        left: "0",
        background: "black",
        padding: "6px",
        borderRadius: "6px",
        display: "flex",
        gap: "4px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      {/* Rotate & Scale */}
      <button onClick={() => onTransformSelected("rotate", -15)}>
        <UilArrowCircleLeft color="#f182f4" />
      </button>
      <button onClick={() => onTransformSelected("rotate", 15)}>
        <UilArrowCircleRight color="#f182f4" />
      </button>
      <button onClick={() => onTransformSelected("scale", 0.1)}>
        <UilPlusCircle color="#f182f4" />
      </button>
      <button onClick={() => onTransformSelected("scale", -0.1)}>
        <UilMinusCircle color="#f182f4" />
      </button>

      {/* Duplicate */}
      <button onClick={onDuplicateSelected} title="Duplicate">
        <UilCopy color="#f182f4" />
      </button>

      {/* Flip */}
      <button onClick={onFlipSelectedX} title="Flip Horizontally">
        <UilFlipV color="#f182f4" />
      </button>
      <button onClick={onFlipSelectedY} title="Flip Vertically">
        <UilFlipV color="#f182f4" style={{ transform: "rotate(90deg)" }} />
      </button>

      <ColorPickerMenu
        currentColor={currentColor}
        colorPalette={colorPalette}
        onColorChange={onColorChange}
      />
    </div>
  );
}
