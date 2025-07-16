// --- Imports ---
import { useState, useRef, useEffect } from "react";
import "../styles/ShapeItem.css";
import { motion, useMotionValue } from "framer-motion";
import ShapeControls from "./ShapeControls"; // ✅ using new component

// --- Component Definition ---
export default function ShapeItem({
  id,
  initialX,
  initialY,
  rotation,
  scaleX,
  scaleY,
  onTransformSelected,
  children,
  zIndex,
  onBringToFront,
  isSelected,
  onSelect,
  onMoveSelected,
  onDragStart,
  onDuplicateSelected,
  onFlipSelectedX,
  onFlipSelectedY,
  currentColor,
  onColorChange,
}) {
  // --- Motion Values for Position ---
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  // --- Local State ---
  const [showControls, setShowControls] = useState(false);

  // --- Refs ---
  const panelRef = useRef(null);

  // --- Effects for Position Updates ---
  useEffect(() => {
    x.set(initialX);
    y.set(initialY);
  }, [initialX, initialY, x, y]);

  // --- Effect to Close Controls Panel on Outside Click ---
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

  // --- Refs to Store Starting Position for Dragging ---
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  // --- Render ---
  return (
    <motion.div
      className={`shape-container ${isSelected ? "selected" : ""}`}
      drag
      dragMomentum={false}
      style={{
        x,
        y,
        position: "absolute",
        cursor: "grab",
        zIndex: zIndex,
        scaleX: scaleX,
        scaleY: scaleY,
        transformOrigin: "center",
      }}
      onPointerDown={(e) => {
        onBringToFront();
        if (!isSelected) {
          onSelect(e.shiftKey);
        }
      }}
      onDoubleClick={() => setShowControls(true)}
      onDragStart={() => {
        startXRef.current = x.get();
        startYRef.current = y.get();
        if (onDragStart) onDragStart();
      }}
      onDrag={(event, info) => {
        if (onMoveSelected) {
          const dx = x.get() - startXRef.current;
          const dy = y.get() - startYRef.current;
          onMoveSelected(id, dx, dy, true);
        }
      }}
      onDragEnd={() => {
        const dx = x.get() - startXRef.current;
        const dy = y.get() - startYRef.current;

        if (onMoveSelected) {
          onMoveSelected(id, dx, dy, false);
        }
      }}
    >
      <motion.div
        className="shape-wrapper"
        style={{
          rotate: rotation,
          transformOrigin: "center",
        }}
      >
        {children}
      </motion.div>

      {showControls && (
        <div ref={panelRef}>
          <ShapeControls
            currentColor={currentColor}
            onTransformSelected={onTransformSelected}
            onDuplicateSelected={onDuplicateSelected}
            onFlipSelectedX={onFlipSelectedX}
            onFlipSelectedY={onFlipSelectedY}
            onColorChange={onColorChange}
            colorPalette={[
              "#f182f4",
              "#f40000",
              "#00ff01",
              "#003eed",
              "#9146f2",
              "#ffff11",
            ]}
          />
        </div>
      )}
    </motion.div>
  );
}
