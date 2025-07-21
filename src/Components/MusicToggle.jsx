import { useState, useEffect } from "react";
import "../styles/MusicButton.css";

// Create and configure one audio object outside the component
const bgMusic = new Audio("/sounds/a_chill_fever.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5; // adjust as needed

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      bgMusic.pause();
      setIsPlaying(false);
    } else {
      bgMusic.play();
      setIsPlaying(true);
    }
  };

  // ✅ 1. Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("musicOn");
    if (saved === "true") {
      bgMusic
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.log("Autoplay blocked until user interaction.");
        });
    }
  }, []);

  // ✅ 2. Save preference whenever isPlaying changes
  useEffect(() => {
    localStorage.setItem("musicOn", isPlaying);
  }, [isPlaying]);

  // (You can remove your old useEffect that duplicated autoplay logic
  // since this new one replaces it)

  return (
    <div className="music-toggle-container">
      <label className="music-switch">
        <input type="checkbox" checked={isPlaying} onChange={toggleMusic} />
        <span className="slider" />
      </label>
      <span className="music-label">{isPlaying ? "N" : "FF"}</span>
    </div>
  );
}
