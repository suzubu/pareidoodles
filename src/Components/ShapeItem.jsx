import { useState, useRef, useEffect } from "react";
import "../styles/ShapeItem.css";
import { motion, useMotionValue } from "framer-motion";
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
  UilPlusCircle,
  UilMinusCircle,
} from "@iconscout/react-unicons";

export default function ShapeItem({
  id,
  initialX,
  initialY,
  children,
  zIndex,
  onBringToFront,
}) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const [showControls, setShowControls] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setShowControls(false);
      }
    }

    if (showControls) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showControls]);

  return (
    <motion.div
      className="shape-container"
      drag
      dragMomentum={false}
      style={{
        x,
        y,
        position: "absolute",
        cursor: "grab",
        zIndex: zIndex,
      }}
      onPointerDown={onBringToFront}
      onDoubleClick={() => setShowControls(true)}
    >
      <motion.div
        className="shape-wrapper"
        style={{
          rotate: rotation,
          scale: scale,
          transformOrigin: "center",
        }}
      >
        {children}
      </motion.div>

      {showControls && (
        <div
          ref={panelRef}
          className="shape-tools"
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "4px",
            padding: "4px",
            display: "flex",
            gap: "4px",
            zIndex: zIndex + 1,
          }}
        >
          <button onClick={() => setRotation((r) => r - 15)}>
            <UilArrowCircleLeft color="#f182f4" />
          </button>
          <button onClick={() => setRotation((r) => r + 15)}>
            <UilArrowCircleRight color="#f182f4" />
          </button>
          <button onClick={() => setScale((s) => s + 0.1)}>
            <UilPlusCircle color="#f182f4" />
          </button>
          <button onClick={() => setScale((s) => Math.max(0.1, s - 0.1))}>
            <UilMinusCircle color="#f182f4" />
          </button>
        </div>
      )}
    </motion.div>
  );
}
