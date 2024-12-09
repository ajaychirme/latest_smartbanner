import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [hasAppOpened, setHasAppOpened] = useState(false);
  const [buttonText, setButtonText] = useState("Install");
  const clickDone = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    const packageName = "com.totum.student";
    const appUrl = `intent://#Intent;package=${packageName};end;`;
  
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=com.totum.student";
    const timeout = 500; // Time in milliseconds before redirecting to Play Store
    let isAppOpened = false;
  
    // Try to open the app
    window.location.href = appUrl;
  
    // Redirect to Play Store if the app is not installed
    setTimeout(() => {
      if (!isAppOpened) {
        console.log("App not installed, redirecting to Play Store...");
        window.location.replace(playStoreUrl);
      }
    }, timeout);
  
    // Check visibility state to determine if the app was opened
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        isAppOpened = true;
      }
    });
  };
  

  useEffect(() => {
    const checkAmazonApp = () => {
      const timeout = 500; // Time in milliseconds before redirecting to Play Store

      // Open the app using its custom URL scheme
      setButtonText("Open");

      // Use a timeout to detect if the app was not installed
      setTimeout(() => {
        if (!hasAppOpened) {
          console.log("App not installed, redirecting to Play Store...");
          setButtonText("Install");
          // window.location.replace(playStoreUrl, "_blank");
        } else {
          setButtonText("Open1");
        }
      }, timeout);

      // Add an event to confirm the user has the app installed (optional)
      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
          setHasAppOpened(true);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    };

    checkAmazonApp();
  }, [hasAppOpened]);
  return (
    <div className="App">
      <h3>{buttonText}</h3>
      <p>Market android check nxtr1223 added</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt=""
      />
      <div className="button-container">
        {/* <button className="btn" onClick={handleInstall}>Install the app</button> */}
        <button className="btn2" onClick={handleOpen}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default App;
