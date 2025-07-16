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

import { ReactComponent as PurpleBlob } from "../assets/shapes/purple-blob.svg";
import { ReactComponent as PurpleTri } from "../assets/shapes/purple-triangle.svg";
import { ReactComponent as RedRec } from "../assets/shapes/red-rec.svg";
import { ReactComponent as RedTris } from "../assets/shapes/red-triangles.svg";
import { ReactComponent as SmallEye } from "../assets/shapes/small-eye.svg";
import { ReactComponent as SmallEyes } from "../assets/shapes/small-eyes.svg";
import { ReactComponent as WideEye } from "../assets/shapes/wide-eye.svg";
import { ReactComponent as YellowTri } from "../assets/shapes/yellow-triangle.svg";

// import {ReactComponent as } from "../assets/shapes/"

const colorPalette = [
  "#f182f4",
  "#f40000",
  "#00ff01",
  "#003eed",
  "#9146f2",
  "#ffff11",
];

const shapeList = [
  // bottom
  { id: "pinkRec", Component: PinkRec },
  { id: "redCirc", Component: RedCirc },
  { id: "wideEyes", Component: WideEyes },
  { id: "bluePent", Component: BluePent },
  { id: "green1", Component: Green1 },
  // middle
  { id: "purpSq", Component: PurpSq },
  { id: "yellowStar", Component: YellowStar },
  { id: "blueSemi", Component: BlueSemi },
  { id: "blueSquiggle", Component: BlueSquiggle },
  { id: "greenRec", Component: GreenRec },
  { id: "green2", Component: Green2 },
  { id: "greenStar", Component: GreenStar },
  // middle2
  { id: "pinkBlob", Component: PinkBlob },
  { id: "purpleBlob", Component: PurpleBlob },
  { id: "purpleTri", Component: PurpleTri },
  { id: "redRec", Component: RedRec },
  { id: "redTris", Component: RedTris },
  { id: "smallEye", Component: SmallEye },
  // top
  { id: "smallEyes", Component: SmallEyes },
  { id: "yellowTri", Component: YellowTri },
  { id: "wideEye", Component: WideEye },

  // add more shapes here…
].map((shape, index) => {
  // shuffle colorPalette to randomize assignment
  const shuffledPalette = [...colorPalette].sort(() => Math.random() - 0.5);
  let assignedColor;
  const isEye = shape.id.toLowerCase().includes("eye");
  if (!isEye) {
    if (index < shuffledPalette.length) {
      // guarantee at least one of each color
      assignedColor = shuffledPalette[index];
    } else {
      // after initial unique assignment, randomize from palette
      assignedColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }
  }
  return {
    ...shape,
    defaultColor: isEye ? undefined : assignedColor,
    initialRotation: 0,
  };
});

export default shapeList;
