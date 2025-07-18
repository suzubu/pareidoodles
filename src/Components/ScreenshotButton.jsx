import "../styles/ScreenshotButton.css";
import html2canvas from "html2canvas";

export default function ScreenshotButton() {
  const captureScreenshot = () => {
    const appElement = document.querySelector(".App");
    const buttonElement = document.getElementById("screenshot-button");

    if (appElement) {
      // Temporarily hide the button
      if (buttonElement) buttonElement.style.visibility = "hidden";

      html2canvas(appElement).then((canvas) => {
        // Restore button visibility
        if (buttonElement) buttonElement.style.visibility = "visible";

        // Trigger download
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <button
      id="screenshot-button"
      className="screenshot-button"
      onClick={captureScreenshot}
    >
      <span className="camera">📷 </span>
      <span className="flash">📸 </span>
      take a picture 
    </button>
  );
}
