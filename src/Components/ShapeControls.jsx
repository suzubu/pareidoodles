import React, { useRef } from "react";
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
  const pressIntervalRef = useRef(null);
  const handlePress = (action, value) => {
    // Perform the action once immediately
    onTransformSelected(action, value);

    // Start interval for continuous action
    pressIntervalRef.current = setInterval(() => {
      onTransformSelected(action, value);
    }, 100); // adjust speed here (ms)
  };

  const stopPress = () => {
    if (pressIntervalRef.current) {
      clearInterval(pressIntervalRef.current);
      pressIntervalRef.current = null;
    }
  };
  return (
    <div className="shape-tools">
      {/* Rotate */}
      <button
        onMouseDown={() => handlePress("rotate", -5)}
        onMouseUp={stopPress}
        onMouseLeave={stopPress}
        onTouchStart={() => handlePress("rotate", -5)}
        onTouchEnd={stopPress}
        title="Rotate Left"
      >
        <UilArrowCircleLeft color="#f182f4" />
      </button>

      <button
        onMouseDown={() => handlePress("rotate", 5)}
        onMouseUp={stopPress}
        onMouseLeave={stopPress}
        onTouchStart={() => handlePress("rotate", 5)}
        onTouchEnd={stopPress}
        title="Rotate Right"
      >
        <UilArrowCircleRight color="#f182f4" />
      </button>

      {/* Scale */}
      <button
        onMouseDown={() => handlePress("scale", 0.1)}
        onMouseUp={stopPress}
        onMouseLeave={stopPress}
        onTouchStart={() => handlePress("scale", 0.1)}
        onTouchEnd={stopPress}
        title="Scale Up"
      >
        <UilPlusCircle color="#f182f4" />
      </button>
      <button
        onMouseDown={() => handlePress("scale", -0.1)}
        onMouseUp={stopPress}
        onMouseLeave={stopPress}
        onTouchStart={() => handlePress("scale", -0.1)}
        onTouchEnd={stopPress}
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
