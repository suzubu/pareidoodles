import { useState } from "react";
import shapeList from "./data/shapeList";
import ShapeItem from "./Components/ShapeItem";
import ScreenshotButton from "./Components/ScreenshotButton";

function App() {
  const [shapeOrder, setShapeOrder] = useState(
    shapeList.map((shape, index) => ({ ...shape, zIndex: index }))
  );

  const bringToFront = (id) => {
    setShapeOrder((prev) => {
      const maxZ = Math.max(...prev.map((s) => s.zIndex));
      return prev.map((s) => (s.id === id ? { ...s, zIndex: maxZ + 1 } : s));
    });
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <ScreenshotButton /> {/* ✅ lives outside the .App container */}
      <div
        className="App"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {shapeOrder.map((shape) => (
          <ShapeItem
            key={shape.id}
            id={shape.id}
            initialX={shape.initialX}
            initialY={shape.initialY}
            zIndex={shape.zIndex}
            onBringToFront={() => bringToFront(shape.id)}
          >
            <shape.Component className="shape-svg" />
          </ShapeItem>
        ))}
      </div>
    </div>
  );
}

export default App;
