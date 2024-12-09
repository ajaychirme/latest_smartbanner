import "./App.css";
import { useState, useEffect, useRef } from "react";

export default function AppCheck() {
  const [hasAppOpened, setHasAppOpened] = useState(false);
  const [buttonText, setButtonText] = useState("Install");
  const clickDoneRef = useRef(null);

  const handleOpen = () => {
    const currentUrl =
      "https://develop.totum.com/discount/ambassador-snooker-and-pool-clubs/get_offer_totum_app";

    const appUrl = currentUrl.includes("/discount/")
      ? currentUrl
      : "nxtr://nux.user.search";

    const playStoreUrl =
      "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
    const timeout = 500; // Time in milliseconds before redirecting to Play Store
    let isAppOpened = false;

    // Open the app using its custom URL scheme
    window.location.href = appUrl;

    // Detect if the app is not installed
    setTimeout(() => {
      if (!isAppOpened) {
        console.log("App not installed, redirecting to Play Store...");
        window.location.replace(playStoreUrl);
      }
    }, timeout);

    // Listen for visibility change to detect if the app was opened
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        isAppOpened = true;
      }
    });
  };

  const setButtonTextOnMount = () => {
    const currentUrl =
      "https://develop.totum.com/discount/ambassador-snooker-and-pool-clubs/get_offer_totum_app";

    const appUrl = currentUrl.includes("/discount/") ? "nxtr://" : "nxtr://";
    const timeout = 500;
    let isAppOpened = false;

    setButtonText("Open");

    // Simulate app installation check
    setTimeout(() => {
      if (!isAppOpened) {
        console.log("App not installed.");
        setButtonText("Install");
      }
    }, timeout);
  };

  useEffect(() => {
    if (clickDoneRef.current) {
      clickDoneRef.current.click();
    }
  }, []);

  return (
    <div className="App">
      <h3>{buttonText}</h3>
      {/* Hidden button for triggering initial logic */}
      <button
        style={{ display: "none" }}
        ref={clickDoneRef}
        onClick={setButtonTextOnMount}
      >
        Hidden Trigger
      </button>
      <p>Market android check nxtr1223 added</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt="Sample"
      />
      <div className="button-container">
        <button className="btn2" onClick={handleOpen}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
