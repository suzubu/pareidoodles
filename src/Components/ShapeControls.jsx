// src/Components/ShapeControls.jsx
import React from "react";
import ColorPickerMenu from "./ColorPickerMenu";
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
    <div className="shape-tools">
      {/* Rotate */}
      <button
        onClick={() => onTransformSelected("rotate", -5)}
        title="Rotate Left"
      >
        <UilArrowCircleLeft color="#f182f4" />
      </button>
      <button
        onClick={() => onTransformSelected("rotate", 5)}
        title="Rotate Right"
      >
        <UilArrowCircleRight color="#f182f4" />
      </button>

      {/* Scale */}
      <button
        onClick={() => onTransformSelected("scale", 0.1)}
        title="Scale Up"
      >
        <UilPlusCircle color="#f182f4" />
      </button>
      <button
        onClick={() => onTransformSelected("scale", -0.1)}
        title="Scale Down"
      >
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

      {/* Color Picker integrated as part of toolbar */}
      <ColorPickerMenu
        currentColor={currentColor}
        colorPalette={colorPalette}
        onColorChange={onColorChange}
      />
    </div>
  );
}
