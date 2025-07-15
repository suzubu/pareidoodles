import { ReactComponent as PinkRec } from "../assets/shapes/pink-rectangle.svg";
import { ReactComponent as RedCirc } from "../assets/shapes/red-circle.svg";
import { ReactComponent as WideEyes } from "../assets/shapes/wide-eyes.svg";
import { ReactComponent as BluePent } from "../assets/shapes/blue-pentagon.svg";
import { ReactComponent as Green1 } from "../assets/shapes/green-shape1.svg";
import { ReactComponent as PurpSq } from "../assets/shapes/purple-squiggle.svg";
import { ReactComponent as YellowStar } from "../assets/shapes/yellow-star.svg";

const padding = 50;
const shapeSize = 100;

const shapeList = [
  { id: "pinkRec", Component: PinkRec },
  { id: "redCirc", Component: RedCirc },
  { id: "wideEyes", Component: WideEyes },
  { id: "bluePent", Component: BluePent },
  { id: "green1", Component: Green1 },
  { id: "purpSq", Component: PurpSq },
  { id: "yellowStar", Component: YellowStar },
  // add more shapes here…
].map((shape) => ({
  ...shape,
  initialX:
    Math.random() * (window.innerWidth - shapeSize - padding * 2) +
    padding +
    shapeSize / 2,
  initialY:
    Math.random() * (window.innerHeight - shapeSize - padding * 2) +
    padding +
    shapeSize / 2,
  initialRotation: 0,
}));

export default shapeList;
