import { ReactComponent as rect1 } from "../assets/shapes/rectangle1.svg";
import { ReactComponent as circ1 } from "../assets/shapes/circ1.svg";
import { ReactComponent as wideEyes } from "../assets/shapes/wide-eyes.svg";
import { ReactComponent as pent1 } from "../assets/shapes/pent1.svg";
import { ReactComponent as blob1 } from "../assets/shapes/blob1.svg";
import { ReactComponent as squig1 } from "../assets/shapes/squig1.svg";
import { ReactComponent as star1 } from "../assets/shapes/star1.svg";
import { ReactComponent as semiCirc1 } from "../assets/shapes/semi-circ1.svg";
import { ReactComponent as squig2 } from "../assets/shapes/squig2.svg";
import { ReactComponent as rect2 } from "../assets/shapes/rectangle2.svg";
import { ReactComponent as blob2 } from "../assets/shapes/blob2.svg";
import { ReactComponent as star2 } from "../assets/shapes/star2.svg";
import { ReactComponent as blob3 } from "../assets/shapes/blob3.svg";
import { ReactComponent as blob4 } from "../assets/shapes/blob4.svg";
import { ReactComponent as tri1 } from "../assets/shapes/triangle1.svg";
import { ReactComponent as rec3 } from "../assets/shapes/rectangle3.svg";
import { ReactComponent as tris1 } from "../assets/shapes/triangles1.svg";
import { ReactComponent as smallEye } from "../assets/shapes/small-eye.svg";
import { ReactComponent as smallEyes } from "../assets/shapes/small-eyes.svg";
import { ReactComponent as wideEye } from "../assets/shapes/wide-eye.svg";
import { ReactComponent as tri2 } from "../assets/shapes/triangle2.svg";
import { ReactComponent as testTri } from "../assets/shapes/test-triangle.svg";

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
  { id: "rect1", Component: rect1 },
  { id: "circ1", Component: circ1 },
  { id: "wideEyes", Component: wideEyes },
  { id: "pent1", Component: pent1 },
  { id: "blob1", Component: blob1 },
  // middle
  { id: "squig1", Component: squig1 },
  { id: "star1", Component: star1 },
  { id: "semiCirc1", Component: semiCirc1 },
  { id: "squig2", Component: squig2 },
  { id: "rect2", Component: rect2 },
  { id: "blob2", Component: blob2 },
  { id: "star2", Component: star2 },
  // middle2
  { id: "blob3", Component: blob3 },
  { id: "blob4", Component: blob4 },
  { id: "tri1", Component: tri1 },
  { id: "rec3", Component: rec3 },
  { id: "tris1", Component: tris1 },
  { id: "smallEye", Component: smallEye },
  // top
  { id: "smallEyes", Component: smallEyes },
  { id: "tri2", Component: tri2 },
  { id: "wideEye", Component: wideEye },
  { id: "testTri", Component: testTri },

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
