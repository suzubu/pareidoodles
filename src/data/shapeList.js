import { ReactComponent as PinkRec } from "../assets/shapes/pink-rectangle.svg";
import { ReactComponent as RedCirc } from "../assets/shapes/red-circle.svg";
import { ReactComponent as WideEyes } from "../assets/shapes/wide-eyes.svg";

const shapeList = [
  { id: "pinkRec", Component: PinkRec },
  { id: "redCirc", Component: RedCirc },
  { id: "wideEyes", Component: WideEyes },
  // add more shapes here…
].map((shape) => ({
  ...shape,
  initialX: Math.random() * 800 + 100,
  initialY: Math.random() * 500 + 100,
  initialRotation: 0,
}));

export default shapeList;
