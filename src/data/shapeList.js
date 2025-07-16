import { ReactComponent as PinkRec } from "../assets/shapes/pink-rectangle.svg";
import { ReactComponent as RedCirc } from "../assets/shapes/red-circle.svg";
import { ReactComponent as WideEyes } from "../assets/shapes/wide-eyes.svg";
import { ReactComponent as BluePent } from "../assets/shapes/blue-pentagon.svg";
import { ReactComponent as Green1 } from "../assets/shapes/green-shape1.svg";
import { ReactComponent as PurpSq } from "../assets/shapes/purple-squiggle.svg";
import { ReactComponent as YellowStar } from "../assets/shapes/yellow-star.svg";
import { ReactComponent as BlueSemi } from "../assets/shapes/blue-semi.svg";
import { ReactComponent as BlueSquiggle } from "../assets/shapes/blue-squiggle.svg";
import { ReactComponent as GreenRec } from "../assets/shapes/green-rec.svg";
import { ReactComponent as Green2 } from "../assets/shapes/green-shape2.svg";
import { ReactComponent as GreenStar } from "../assets/shapes/green-star.svg";
import { ReactComponent as PinkBlob } from "../assets/shapes/pink-blob.svg";
import { ReactComponent as PinkSemi } from "../assets/shapes/pink-semi.svg";
import { ReactComponent as PurpleBlob } from "../assets/shapes/purple-blob.svg";
import { ReactComponent as PurpleTri } from "../assets/shapes/purple-triangle.svg";
import { ReactComponent as RedRec } from "../assets/shapes/red-rec.svg";
import { ReactComponent as RedTris } from "../assets/shapes/red-triangles.svg";
import { ReactComponent as SmallEye } from "../assets/shapes/small-eye.svg";
import { ReactComponent as SmallEyes } from "../assets/shapes/small-eyes.svg";
import { ReactComponent as WideEye } from "../assets/shapes/wide-eye.svg";
import { ReactComponent as YellowSemi } from "../assets/shapes/yellow-semi.svg";
import { ReactComponent as YellowTri } from "../assets/shapes/yellow-triangle.svg";

// import {ReactComponent as } from "../assets/shapes/"

const padding = 50;
const shapeSize = 100;

const shapeList = [
  { id: "pinkRec", Component: PinkRec },
  { id: "redCirc", Component: RedCirc },
  { id: "wideEyes", Component: WideEyes },
  { id: "wideEye", Component: WideEye },
  { id: "bluePent", Component: BluePent },
  { id: "green1", Component: Green1 },
  { id: "purpSq", Component: PurpSq },
  { id: "yellowStar", Component: YellowStar },
  { id: "blueSemi", Component: BlueSemi },
  { id: "blueSquiggle", Component: BlueSquiggle },
  { id: "greenRec", Component: GreenRec },
  { id: "green2", Component: Green2 },
  { id: "greenStar", Component: GreenStar },
  { id: "pinkBlob", Component: PinkBlob },
  { id: "pinkSemi", Component: PinkSemi },
  { id: "purpleBlob", Component: PurpleBlob },
  { id: "purpleTri", Component: PurpleTri },
  { id: "redRec", Component: RedRec },
  { id: "redTris", Component: RedTris },
  { id: "smallEye", Component: SmallEye },
  { id: "smallEyes", Component: SmallEyes },
  { id: "yellowSemi", Component: YellowSemi },
  { id: "yellowTri", Component: YellowTri },

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
