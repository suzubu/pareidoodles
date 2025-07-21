# 🧲 Fridge Magnets

> A playful web app where you can drag, rotate, and scale shapes on a digital canvas — like making art with fridge magnets.

---

## 🖼 Preview

![App Preview](media/preview.gif)

*(Replace `media/preview.gif` with your actual path. GIFs should be compressed for GitHub.)*

---

## ⚙️ Getting Started

These steps will get you running locally:

```bash
# 1. Clone the repo
git clone https://github.com/yourname/fridge-magnets.git

# 2. Navigate into the project folder
cd fridge-magnets

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
```

> Built with:  
> - [React](https://react.dev/)  
> - [Vite](https://vitejs.dev/)  
> - [Framer Motion](https://www.framer.com/motion/)  
> - [Zustand](https://zustand-demo.pmnd.rs/) for state management  
> - Plain CSS for styling

---

## ✨ Features

- ✅ Drag shapes freely on the canvas  
- 🔁 Rotate and scale shapes via control panel  
- 📦 Multi‑select shapes to move or transform them together  
- 🎨 Randomize shape placement for playful layouts  
- 📸 Capture a screenshot of your creation

---

## 💡 Dev Notes

- Used Framer Motion for smooth dragging and transform animations.  
- Zustand handles global state for selections and z‑index management.  
- Designed to be extended with more shapes and control features (duplicate, delete, color picker, etc.).

---

## 📚 Inspiration / Credits

This project was inspired by:
- Real‑life fridge magnets and playful creative tools
- [Framer Motion examples](https://www.framer.com/motion/) for drag and animation
- Community discussions on interactive UI patterns

---

## 🧪 Known Issues

- ❌ No persistence yet: refreshing the page resets all shapes
- 🔍 Z‑index logic may need refinement for very complex scenarios

---

## 🔭 Roadmap / TODO

- [ ] Add duplicate and delete controls  
- [ ] Allow custom SVG uploads  
- [ ] Save/load layouts  
- [ ] Enhance accessibility and keyboard controls

---

## 📂 Folder Structure

```bash
fridge-magnets/
├── src/
│   ├── App.jsx
│   ├── Components/
│   │   ├── ShapeItem.jsx
│   │   ├── ShapeControls.jsx
│   ├── data/
│   │   └── shapeList.js
│   ├── styles/
│   │   ├── App.css
│   │   └── ShapeItem.css
│   └── main.jsx
├── public/
│   └── media/
│       └── preview.gif
└── README.md
```

---

## 📜 License

Contact me please! 

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [suzubu](https://github.com/suzubu)


## 🪜 Next Steps

- add more shapes ✅
- separate buttons/tool bar into components ✅
  - add features to duplicate, flip, hide ✅
  - add feature to choose shape + color/pattern ✅
- make tools/interface a bit cuter
- add sound to when picture is taken
- seo / sharing / loading images/content
- add an intro page/about
- simple shape creator? 
- improve layering of shapes; grouping, deleting, having objects move from the new grouped center; ensuring flipped shapes register new orientation for degree changes 
  - improve function on touch screen (ipad/iphone)
