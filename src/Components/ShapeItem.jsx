// --- Imports ---
import { useState, useRef, useEffect } from "react";
import "../styles/ShapeItem.css";
import { motion, useMotionValue } from "framer-motion";
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
  UilPlusCircle,
  UilMinusCircle,
  UilCopy,
  UilFlipV,
} from "@iconscout/react-unicons";

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
  const [showColorMenu, setShowColorMenu] = useState(false);
  const colorPalette = [
    "#f182f4",
    "#f40000",
    "#00ff01",
    "#003eed",
    "#9146f2",
    "#ffff11",
  ];

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
        // only change selection if it's not already in selectedIds
        if (!isSelected) {
          onSelect(e.shiftKey);
        }
      }}
      onDoubleClick={() => setShowControls(true)}
      onDragStart={() => {
        // store starting position of this shape
        startXRef.current = x.get();
        startYRef.current = y.get();

        // let App know to record starting positions of all selected shapes
        if (onDragStart) {
          onDragStart();
        }
      }}
      onDrag={(event, info) => {
        if (onMoveSelected) {
          const dx = x.get() - startXRef.current;
          const dy = y.get() - startYRef.current;
          // live-update positions of all selected shapes
          onMoveSelected(id, dx, dy, true);
        }
      }}
      onDragEnd={() => {
        const dx = x.get() - startXRef.current;
        const dy = y.get() - startYRef.current;
        if (onMoveSelected) {
          // finalize positions of all selected shapes
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
        <div
          ref={panelRef}
          className="shape-tools"
          style={{
            zIndex: zIndex + 1,
          }}
        >
          {[
            {
              type: "rotate",
              delta: -15,
              icon: <UilArrowCircleLeft color="#f182f4" />,
            },
            {
              type: "rotate",
              delta: 15,
              icon: <UilArrowCircleRight color="#f182f4" />,
            },
            {
              type: "scale",
              delta: 0.1,
              icon: <UilPlusCircle color="#f182f4" />,
            },
            {
              type: "scale",
              delta: -0.1,
              icon: <UilMinusCircle color="#f182f4" />,
            },
          ].map(({ type, delta, icon }, index) => (
            <button
              key={index}
              onClick={() => onTransformSelected(type, delta)}
            >
              {icon}
            </button>
          ))}

          {/* ➕ Duplicate button */}
          <button onClick={onDuplicateSelected} title="Duplicate">
            <UilCopy color="#f182f4" />
          </button>

          {/* 🔄 Flip buttons */}
          <button onClick={onFlipSelectedX} title="Flip Horizontally">
            <UilFlipV color="#f182f4" />
          </button>
          <button onClick={onFlipSelectedY} title="Flip Vertically">
            <UilFlipV color="#f182f4" style={{ transform: "rotate(90deg)" }} />
          </button>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowColorMenu(!showColorMenu)}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "2px solid #333",
                backgroundColor: currentColor || "#ccc", // current color
                cursor: "pointer",
              }}
            ></button>
            {showColorMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  display: "flex",
                  gap: "4px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  zIndex: 1000,
                }}
              >
                {colorPalette.map((col) => (
                  <div
                    key={col}
                    onClick={() => {
                      if (typeof onColorChange === "function")
                        onColorChange(col);
                      setShowColorMenu(false);
                    }}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: col,
                      border: "2px solid #333",
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
