import "./App.css";
import { useState, useEffect } from "react";

function AppCheck() {
  const buttonText = "Install";
  // const [isIncognito, setIsIncognito] = useState(false);
  // const detectIncognitoMode = (callback) => {
  //   const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
  //   console.log("FS is =>",fs)
  //   if (!fs) {
  //     callback(false);
  //   } else {
  //     fs(
  //       window.TEMPORARY,
  //       100,
  //       () => callback(false),
  //       () => callback(true)
  //     );
  //   }
  // };

  // useEffect(() => {
  //   console.log("Inside use effect")
  //   detectIncognitoMode((result) => setIsIncognito(result));
  // }, []);

  // const handleOpen = () => {
  //   // const appUrl = "https://nxtr://nux.user.search";

  //   // const appUrl = data=='offer'?"https://totum.com/discount/john-greed/offer":"https://totum.com/discount";
  //   const appUrl = "https://totum.com/discount";
  //   const playStoreUrl =
  //     "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
  //   const timeout = 500; // Time in milliseconds before redirecting to Play Store
  //   let hasAppOpened = false;

  //   // Open the app using its custom URL scheme
  //   window.location.href = appUrl;

  //   // Use a timeout to detect if the app was not installed
  //   setTimeout(() => {
  //     if (!hasAppOpened) {
  //       console.log("App not installed, redirecting to Play Store...");
  //       window.location.replace(playStoreUrl, "_blank");
  //     }
  //   }, timeout);

  //   // Add an event to confirm the user has the app installed (optional)
  //   document.addEventListener("visibilitychange", () => {
  //     if (document.visibilityState === "hidden") {
  //       hasAppOpened = true;
  //     }
  //   });
  // };

  const handleButtonClick = (page) => {
    console.log('Clicked');
        // Determine the appropriate app URL based on the current environment
        const currentUrl = window.location.href;
        let appUrl = "https://totum.com/discount";
        const playStoreUrl = 
            'intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;';
        const timeout = 500; // Time in milliseconds before redirecting to Play Store
        let hasAppOpened = false;

        // Open the app using its custom URL scheme
        window.location.href = appUrl;

        // Use a timeout to detect if the app was not installed
        setTimeout(() => {
            if (!hasAppOpened) {
                console.log('App not installed, redirecting to Play Store...');
                window.location.replace(playStoreUrl);
            }
        }, timeout);

        // Add an event to confirm the user has the app installed (optional)
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                hasAppOpened = true;
            }
        });
    
};

const handleOfferClick = (page) => {
  console.log('Clicked');
      // Determine the appropriate app URL based on the current environment
      const currentUrl = window.location.href;
      let appUrl = "https://totum.com/discount/john-greed/offer";
      const playStoreUrl = 
          'intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;';
      const timeout = 500; // Time in milliseconds before redirecting to Play Store
      let hasAppOpened = false;
      // Open the app using its custom URL scheme
      window.location.href = appUrl;
      // Use a timeout to detect if the app was not installed
      setTimeout(() => {
          if (!hasAppOpened) {
              console.log('App not installed, redirecting to Play Store...');
              window.location.replace(playStoreUrl);
          }
      }, timeout);

      // Add an event to confirm the user has the app installed (optional)
      document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
              hasAppOpened = true;
          }
      });
  
};


  return (
    <div className="App">
      <h1>META ADDED69</h1>
      {/* <h3>{buttonText}</h3> */}
      <p>Market android check nxtr1223 added</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt=""
      />
      <div className="button-container">
        {/* <button className="btn" onClick={handleInstall}>Install the app</button> */}
        <button className="btn2" onClick={handleButtonClick}>
          {buttonText}
        </button>
        <button className="btn2" onClick={handleOfferClick}>
          Offer
        </button>
        
      </div>
    </div>
  );
}

export default AppCheck;
