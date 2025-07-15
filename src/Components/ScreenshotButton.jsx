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
      onClick={captureScreenshot}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 9999,
        padding: "8px 12px",
        background: "#444",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      📸 Take a Picture!
    </button>
  );
}
