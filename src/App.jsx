import { useState, useRef } from "react";
import shapeList from "./data/shapeList";
import ShapeItem from "./Components/ShapeItem";
import ScreenshotButton from "./Components/ScreenshotButton";
import "./styles/App.css";

function App() {
  // --- State Setup ---
  const [shapeOrder, setShapeOrder] = useState(
    shapeList.map((shape, index) => ({
      ...shape,
      zIndex: index,
      rotation: 0,
      scale: 1,
    }))
  );

  const [selectedIds, setSelectedIds] = useState([]);

  const [selectionBox, setSelectionBox] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  // --- Transform and BringToFront ---
  const bringToFront = (id) => {
    setShapeOrder((prev) => {
      const clicked = prev.find((s) => s.id === id);
      const others = prev.filter((s) => s.id !== id);
      const maxZ = Math.max(...prev.map((s) => s.zIndex));
      const updatedClicked = { ...clicked, zIndex: maxZ + 1 };
      return [...others, updatedClicked];
    });
  };

  const toggleSelect = (id, multi) => {
    setSelectedIds((prev) => {
      if (multi) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      } else {
        return [id];
      }
    });
  };

  // --- Box Selection Logic ---
  const handleMouseDown = (e) => {
    if (e.target.classList.contains("App")) {
      setIsSelecting(true);
      setSelectionBox({
        startX: e.clientX,
        startY: e.clientY,
        currentX: e.clientX,
        currentY: e.clientY,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isSelecting) {
      setSelectionBox((prev) => ({
        ...prev,
        currentX: e.clientX,
        currentY: e.clientY,
      }));
    }
  };

  const handleMouseUp = () => {
    if (isSelecting && selectionBox) {
      setIsSelecting(false);

      const selLeft = Math.min(selectionBox.startX, selectionBox.currentX);
      const selTop = Math.min(selectionBox.startY, selectionBox.currentY);
      const selRight = Math.max(selectionBox.startX, selectionBox.currentX);
      const selBottom = Math.max(selectionBox.startY, selectionBox.currentY);

      const newSelected = shapeOrder
        .filter((shape) => {
          const shapeWidth = 100;
          const shapeHeight = 100;
          const left = shape.initialX - shapeWidth / 2;
          const top = shape.initialY - shapeHeight / 2;
          const right = left + shapeWidth;
          const bottom = top + shapeHeight;
          return !(
            right < selLeft ||
            left > selRight ||
            bottom < selTop ||
            top > selBottom
          );
        })
        .map((shape) => shape.id);

      setSelectedIds(newSelected);
      setSelectionBox(null);
    }
  };

  // --- Transform Selected Shapes ---
  const transformSelected = (type, delta) => {
    setShapeOrder((prev) =>
      prev.map((shape) => {
        if (selectedIds.includes(shape.id)) {
          if (type === "rotate") {
            return { ...shape, rotation: (shape.rotation || 0) + delta };
          }
          if (type === "scale") {
            return {
              ...shape,
              scale: Math.max(0.1, (shape.scale || 1) + delta),
            };
          }
        }
        return shape;
      })
    );
  };

  // --- Dragging Logic ---
  const dragStartPositions = useRef({});

  const handleDragStart = () => {
    const positions = {};
    selectedIds.forEach((id) => {
      const shape = shapeOrder.find((s) => s.id === id);
      positions[id] = { x: shape.initialX, y: shape.initialY };
    });
    dragStartPositions.current = positions;
  };

  const moveSelectedShapes = (draggedId, dx, dy = false) => {
    setShapeOrder((prev) =>
      prev.map((shape) => {
        if (selectedIds.includes(shape.id)) {
          const start = dragStartPositions.current[shape.id];
          if (!start) {
            return shape;
          }
          return {
            ...shape,
            initialX: start.x + dx,
            initialY: start.y + dy,
          };
        }
        return shape;
      })
    );
  };

  return (
    <div className="outer-container">
      <ScreenshotButton />
      <div
        className="App app-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {shapeOrder.map((shape) => (
          <ShapeItem
            key={shape.id}
            id={shape.id}
            initialX={shape.initialX}
            initialY={shape.initialY}
            zIndex={shape.zIndex}
            rotation={shape.rotation}
            scale={shape.scale}
            isSelected={selectedIds.includes(shape.id)}
            onSelect={(multi) => toggleSelect(shape.id, multi)}
            onBringToFront={() => bringToFront(shape.id)}
            onDragStart={handleDragStart}
            onMoveSelected={moveSelectedShapes}
            onTransformSelected={transformSelected}
          >
            <shape.Component className="shape-svg" />
          </ShapeItem>
        ))}

        {selectionBox && (
          <div
            className="selection-box"
            style={{
              left: Math.min(selectionBox.startX, selectionBox.currentX),
              top: Math.min(selectionBox.startY, selectionBox.currentY),
              width: Math.abs(selectionBox.currentX - selectionBox.startX),
              height: Math.abs(selectionBox.currentY - selectionBox.startY),
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default App;
