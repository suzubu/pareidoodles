import { smallLayout, mediumLayout, largeLayout } from "../data/layout";

export default function generateInitialShapes(
  shapeList,
  windowWidth,
  windowHeight
) {
  // choose which layout to use based on screen width
  let layout;
  if (windowWidth < 600) {
    layout = smallLayout;
  } else if (windowWidth < 1200) {
    layout = mediumLayout;
  } else {
    layout = largeLayout;
  }

  // map shapes to positions from the chosen layout
  return shapeList.map((shape, index) => {
    const layoutIndex = index % layout.length; // loop through if more shapes than positions
    const pos = layout[layoutIndex];

    return {
      ...shape,
      initialX: pos.x * windowWidth,
      initialY: pos.y * windowHeight,
      rotation: 0,
      scaleX: pos.scale,
      scaleY: pos.scale,
      zIndex: index,
      color: shape.defaultColor,
    };
  });
}
