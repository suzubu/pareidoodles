// import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function ShapeItem({
  id,
  initialX,
  initialY,
  //   width = 100,
  //   height = 100,
  children,
  zIndex,
  onBringToFront,
}) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  return (
    <motion.div
      className="shape-wrapper"
      data-id={id}
      drag
      dragMomentum={false}
      onPointerDown={onBringToFront}
      style={{
        x,
        y,
        position: "absolute",
        cursor: "grab",
        transformOrigin: "center",
        zIndex: zIndex,
      }}
    >
      {children}
    </motion.div>
  );
}
