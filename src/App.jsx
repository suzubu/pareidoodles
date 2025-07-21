import { useState, useRef } from "react";
import shapeList from "./data/shapeList";
import ShapeItem from "./Components/ShapeItem";
import ScreenshotButton from "./Components/ScreenshotButton";
import SelectionBox from "./Components/SelectionBox";
import generateInitialShapes from "./utils/generateIntialShapes";
import "./styles/App.css";


function App() {
  // --- State Setup ---
  const [shapeOrder, setShapeOrder] = useState(() =>
    generateInitialShapes(shapeList, window.innerWidth, window.innerHeight, 0.5)
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
              scaleX: Math.max(0.1, (shape.scaleX || 1) + delta),
              scaleY: Math.max(0.1, (shape.scaleY || 1) + delta),
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
          if (!start) return shape;
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

  // --- Duplicate Shapes ---
  const duplicateSelected = () => {
    setShapeOrder((prev) => {
      const newShapes = [];
      selectedIds.forEach((id) => {
        const shape = prev.find((s) => s.id === id);
        if (shape) {
          newShapes.push({
            ...shape,
            id: shape.id + "-copy-" + Date.now() + Math.random(),
            initialX: shape.initialX + 30,
            initialY: shape.initialY + 30,
            zIndex: shape.zIndex + 1,
          });
        }
      });
      return [...prev, ...newShapes];
    });
  };

  // --- Flip Shapes ---
  const flipSelectedX = () => {
    setShapeOrder((prev) =>
      prev.map((shape) => {
        if (selectedIds.includes(shape.id)) {
          return {
            ...shape,
            scaleX: (shape.scaleX || 1) * -1,
          };
        }
        return shape;
      })
    );
  };

  const flipSelectedY = () => {
    setShapeOrder((prev) =>
      prev.map((shape) => {
        if (selectedIds.includes(shape.id)) {
          return {
            ...shape,
            scaleY: (shape.scaleY || 1) * -1,
          };
        }
        return shape;
      })
    );
  };

  const updateSelectedColor = (newColor) => {
    console.log("🎨 Updating color to:", newColor, "for", selectedIds);
    setShapeOrder((prev) =>
      prev.map((shape) =>
        selectedIds.includes(shape.id) ? { ...shape, color: newColor } : shape
      )
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
            scaleX={shape.scaleX}
            scaleY={shape.scaleY}
            isSelected={selectedIds.includes(shape.id)}
            onSelect={(multi) => toggleSelect(shape.id, multi)}
            onBringToFront={() => bringToFront(shape.id)}
            onDragStart={handleDragStart}
            onMoveSelected={moveSelectedShapes}
            onTransformSelected={transformSelected}
            onDuplicateSelected={duplicateSelected}
            onFlipSelectedX={flipSelectedX}
            onFlipSelectedY={flipSelectedY}
            currentColor={shape.color}
            onColorChange={updateSelectedColor}
          >
            <shape.Component
              className="shape-svg"
              style={{ color: shape.color }}
            />
          </ShapeItem>
        ))}

        {selectionBox && (
          <SelectionBox
            startX={selectionBox.startX}
            startY={selectionBox.startY}
            currentX={selectionBox.currentX}
            currentY={selectionBox.currentY}
          />
        )}
      </div>
    </div>
  );
}

export default App;
