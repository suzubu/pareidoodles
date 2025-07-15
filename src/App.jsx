import shapeList from "./data/shapeList";
import ShapeItem from "./Components/ShapeItem";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {shapeList.map((shape) => (
        <ShapeItem
          key={shape.id}
          initialX={shape.initialX}
          initialY={shape.initialY}
          // initialRotation={shape.initialRotation}
        >
          <shape.Component className="shape-svg" />
        </ShapeItem>
      ))}
    </div>
  );
}

export default App;
