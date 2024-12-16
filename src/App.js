import "./App.css";
import React from "react";

function AppCheck() {
  const buttonText = "Install";

  const handleButtonClick = (isOffer = false) => {
    console.log('Clicked');
    // Determine the appropriate app URL based on the button clicked
    const appUrl = isOffer
      ? "https://totum.com/discount/john-greed/offer"
      : "https://totum.com/discount";
    const playStoreUrl =
      "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
    const timeout = 500; // Time in milliseconds before redirecting to Play Store
    let hasAppOpened = false;

    // Open the app using its custom URL scheme
    window.location.href = appUrl;

    // Use a timeout to detect if the app was not installed
    setTimeout(() => {
      if (!hasAppOpened) {
        console.log("App not installed, redirecting to Play Store...");
        window.location.replace(playStoreUrl);
      }
    }, timeout);

    // Add an event to confirm the user has the app installed (optional)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        hasAppOpened = true;
      }
    });
  };

  return (
    <div className="App">
      <h1>META ADDED69</h1>
      <p>Market android check nxtr1223 added</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt=""
      />
      <div className="button-container">
        <button className="btn2" onClick={() => handleButtonClick(false)}>
          {buttonText}
        </button>
        <button className="btn2" onClick={() => handleButtonClick(true)}>
          Offer
        </button>
      </div>
    </div>
  );
}

export default AppCheck;
