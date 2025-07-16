// export const smallLayout = [
//   { x: 4, y: 856, scale: 0.5 },
//   { x: 91, y: 815, scale: 0.5 },
//   { x: 118, y: 845, scale: 0.5 },
//   { x: 300, y: 830, scale: 0.5 },
//   { x: 395, y: 810, scale: 0.5 },
//   { x: 27, y: 770, scale: 0.5 },
//   { x: 41, y: 724, scale: 0.5 },
//   { x: 163, y: 740, scale: 0.5 },
//   { x: 223, y: 740, scale: 0.5 },
//   { x: 245, y: 800, scale: 0.5 },
//   { x: 410, y: 725, scale: 0.5 },
//   { x: 280, y: 711, scale: 0.5 },
//   { x: 36, y: 710, scale: 0.5 },
//   { x: 115, y: 705, scale: 0.5 },
//   { x: 240, y: 670, scale: 0.5 },
//   { x: 380, y: 635, scale: 0.5 },
//   { x: 425, y: 690, scale: 0.5 },
//   { x: 76, y: 704, scale: 0.5 },
//   { x: 280, y: 685, scale: 0.5 },
//   { x: 28, y: 624, scale: 0.5 },
//   { x: 105, y: 661, scale: 0.5 },
// ];

// export const mediumLayout = [
//   { x: 27.5, y: 837, scale: 0.7 },
//   { x: 180, y: 785, scale: 0.7 },
//   { x: 289, y: 837, scale: 0.7 },
//   { x: 510, y: 766, scale: 0.7 },
//   { x: 623, y: 815, scale: 0.7 },
//   { x: 717, y: 765, scale: 0.7 },
//   { x: 60, y: 738, scale: 0.7 },
//   { x: 247, y: 675, scale: 0.7 },
//   { x: 325, y: 690, scale: 0.7 },
//   { x: 385, y: 735, scale: 0.7 },
//   { x: 625, y: 705, scale: 0.7 },
//   { x: 675, y: 635, scale: 0.7 },
//   { x: 40, y: 670, scale: 0.7 },
//   { x: 110, y: 665, scale: 0.7 },
//   { x: 320, y: 600, scale: 0.7 },
//   { x: 430, y: 585, scale: 0.7 },
//   { x: 495, y: 660, scale: 0.7 },
//   { x: 775, y: 735, scale: 0.7 },
//   { x: 780, y: 800, scale: 0.7 },
//   { x: 40, y: 575, scale: 0.7 },
//   { x: 180, y: 590, scale: 0.7 },
// ];

// export const largeLayout = [
//   { x: 100, y: 600, scale: 1 },
//   { x: 250, y: 600, scale: 1 },
//   { x: 400, y: 600, scale: 1 },
//   { x: 550, y: 600, scale: 1 },
//   { x: 700, y: 600, scale: 1 },
//   { x: 850, y: 600, scale: 1 },
//   { x: 100, y: 720, scale: 1 },
//   { x: 250, y: 720, scale: 1 },
//   { x: 400, y: 720, scale: 1 },
//   { x: 550, y: 720, scale: 1 },
//   { x: 700, y: 720, scale: 1 },
//   { x: 850, y: 720, scale: 1 },
//   { x: 100, y: 840, scale: 1 },
//   { x: 250, y: 840, scale: 1 },
//   { x: 400, y: 840, scale: 1 },
//   { x: 550, y: 840, scale: 1 },
//   { x: 700, y: 840, scale: 1 },
//   { x: 850, y: 840, scale: 1 },
//   { x: 1000, y: 840, scale: 1 },
//   { x: 1150, y: 840, scale: 1 },
// ];

// src/data/layout.js
// 🎨 Positions stored as percentages (0–1) of viewport width/height
// 👉 initialX = pos.x * window.innerWidth
// 👉 initialY = pos.y * window.innerHeight

export const smallLayout = [
  // bottom row
  { x: 0.02, y: 0.9, scale: 0.65 },
  { x: 0.25, y: 0.88, scale: 0.65 },
  { x: 0.3, y: 0.83, scale: 0.65 },
  { x: 0.65, y: 0.85, scale: 0.65 },
  { x: 0.9, y: 0.85, scale: 0.65 },
  // middle
  { x: 0.03, y: 0.8, scale: 0.65 },
  { x: 0.07, y: 0.79, scale: 0.65 },
  { x: 0.27, y: 0.7, scale: 0.65 },
  { x: 0.36, y: 0.69, scale: 0.65 },
  { x: 0.4, y: 0.78, scale: 0.65 },
  { x: 0.79, y: 0.78, scale: 0.65 },
  { x: 0.79, y: 0.71, scale: 0.65 },
  // middle2
  { x: 0.03, y: 0.73, scale: 0.65 },
  { x: 0.06, y: 0.72, scale: 0.65 },
  { x: 0.27, y: 0.62, scale: 0.65 },
  { x: 0.48, y: 0.65, scale: 0.65 },
  { x: 0.55, y: 0.72, scale: 0.65 },
  { x: 0.72, y: 0.74, scale: 0.65 },
  // top
  { x: 0.03, y: 0.68, scale: 0.65 },
  { x: 0.57, y: 0.64, scale: 0.65 },
  { x: 0.75, y: 0.66, scale: 0.65 },
];

export const mediumLayout = [
  // top
  { x: 0.03, y: 0.9, scale: 0.85 },
  { x: 0.25, y: 0.88, scale: 0.85 },
  { x: 0.35, y: 0.86, scale: 0.85 },
  { x: 0.7, y: 0.86, scale: 0.85 },
  { x: 0.9, y: 0.85, scale: 0.85 },
  // middle
  { x: 0.05, y: 0.75, scale: 0.85 },
  { x: 0.1, y: 0.78, scale: 0.85 },
  { x: 0.3, y: 0.72, scale: 0.85 },
  { x: 0.42, y: 0.68, scale: 0.85 },
  { x: 0.6, y: 0.77, scale: 0.85 },
  { x: 0.93, y: 0.73, scale: 0.85 },
  { x: 0.75, y: 0.62, scale: 0.85 },
  // middle2
  { x: 0.05, y: 0.66, scale: 0.85 },
  { x: 0.12, y: 0.72, scale: 0.85 },
  { x: 0.3, y: 0.62, scale: 0.85 },
  { x: 0.53, y: 0.68, scale: 0.85 },
  { x: 0.6, y: 0.7, scale: 0.85 },
  { x: 0.72, y: 0.72, scale: 0.85 },
  // top
  { x: 0.11, y: 0.65, scale: 0.85 },
  { x: 0.37, y: 0.59, scale: 0.85 },
  { x: 0.55, y: 0.61, scale: 0.85 },
];

export const largeLayout = [
  // top
  { x: 0.05, y: 0.9, scale: 1.3 },
  { x: 0.25, y: 0.85, scale: 1.3 },
  { x: 0.43, y: 0.85, scale: 1.3 },
  { x: 0.68, y: 0.85, scale: 1.3 },
  { x: 0.85, y: 0.84, scale: 1.3 },
  // middle
  { x: 0.07, y: 0.73, scale: 1.3 },
  { x: 0.16, y: 0.7, scale: 1.3 },
  { x: 0.3, y: 0.65, scale: 1.3 },
  { x: 0.45, y: 0.64, scale: 1.3 },
  { x: 0.55, y: 0.75, scale: 1.3 },
  { x: 0.8, y: 0.7, scale: 1.3 },
  { x: 0.88, y: 0.65, scale: 1.3 },
  // middle2
  { x: 0.03, y: 0.6, scale: 1.3 },
  { x: 0.1, y: 0.6, scale: 1.3 },
  { x: 0.25, y: 0.5, scale: 1.3 },
  { x: 0.4, y: 0.6, scale: 1.3 },
  { x: 0.6, y: 0.65, scale: 1.3 },
  { x: 0.7, y: 0.65, scale: 1.3 },
  // top
  { x: 0.09, y: 0.52, scale: 1.3 },
  { x: 0.51, y: 0.5, scale: 1.3 },
  { x: 0.75, y: 0.55, scale: 1.3 },
];
