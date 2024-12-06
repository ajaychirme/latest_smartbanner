import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [buttonText, setButtonText] = useState("");

  const handleOpen = () => {
    const appUrl = "nxtr://nux.user.search";
    const playStoreUrl = "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
    const timeout = 500; // Time in milliseconds before redirecting to Play Store
    let hasAppOpened = false;

    // Open the app using its custom URL scheme
    window.location.href = appUrl;

    // Use a timeout to detect if the app was not installed
    setTimeout(() => {
      if (!hasAppOpened) {
        console.log("App not installed, redirecting to Play Store...");
        window.location.replace(playStoreUrl, "_blank");
      }
    }, timeout);

    // Add an event to confirm the user has the app installed (optional)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        hasAppOpened = true;
      }
    });
  };

  // const handleOpen = () => {
  //   console.log("Clicked");

  //   const ua = navigator.userAgent || navigator.vendor || "";
  //   const isAndroid = /Android|webOS|BlackBerry|IEMobile|Mobile|CriOS/i.test(
  //     ua
  //   );

  //   console.log("IsAndroid =>", isAndroid);

  //   if (isAndroid) {
  //     // const env = process.env.ENV_NAME;
  //     let appUrl = "";
  //     appUrl =
  //       "intent://scan/#Intent;scheme=nxtr;package=com.totum.student.dev;end;";

  //     if (buttonText === "Install") {
  //       console.log("Installed app");
  //       window.open(
  //         "https://play.google.com/store/apps/details?id=com.totum.student",
  //         "_blank"
  //       );
  //     } else {
  //       console.log("Opening app");
  //       appUrl =
  //         "intent://scan/#Intent;scheme=nxtr;package=com.totum.student;end;";
  //       window.location.replace(appUrl);
  //     }
  //   }
  // };
  function clearHistory() {
    // Push an empty state to clear URL fragment
    window.history.pushState({}, "", "/");
    // Push another state to ensure URL is reset
    window.history.pushState({}, "", "/");
    // Remove the current state from history
    window.history.go(-1);
  }
  // const checkIfAppInstalled = () => {
  //   console.log("checkIfAppInstalled");
  //   // const env = process.env.ENV_NAME;
  //   let testUrl = "";
  //   testUrl = "nxtr://scan"; // Scheme for production
  //   const iframe = document.createElement("iframe");
  //   iframe.style.display = "none";
  //   iframe.src = testUrl;
  //   // const start = Date.now();
  //   const timeout = setTimeout(() => {
  //     document.body.removeChild(iframe);
  //     setButtonText("Install");
  //     // App not installed
  //   }, 500);
  //   iframe.onload = () => {
  //     clearTimeout(timeout);
  //     setButtonText("Open"); // App is installed
  //     document.body.removeChild(iframe);
  //   };
  //   iframe.onerror = () => {
  //     clearTimeout(timeout);
  //     setButtonText("Install"); // App not installed
  //     document.body.removeChild(iframe);
  //   };
  //   document.body.appendChild(iframe);
  // };

  // useEffect(() => {
  //   const appUrl = "nxtr://";
  //   const playStoreUrl =
  //     "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
  //   const timeout = 500; // Time in milliseconds before redirecting
  //   let hasAppOpened = false;

  //   // Try to open the app using the custom URL scheme
  //   // window.location.href = appUrl;

  //   // Use a timeout to detect if the app was not installed
  //   const timer = setTimeout(() => {
  //     if (!hasAppOpened) {
  //       console.log("App not installed, setting buttonText to Install");
  //       setButtonText("Open"); // Set button text to "Install" if app is not installed
  //       // window.location.href = playStoreUrl; // Redirect to Play Store
  //     }
  //   }, timeout);

  //   // Add an event listener to detect if the app is opened
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "hidden") {
  //       hasAppOpened = true;
  //       console.log("App opened, setting buttonText to Open");
  //       setButtonText("Install"); // Set button text to "Open" if app is installed
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);

  //   // Cleanup function to clear the timer and event listener
  //   return () => {
  //     clearTimeout(timer);
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);

  useEffect(() => {
    const checkAmazonApp = () => {
      // const appUrl = "nxtr://nux.user.search";
      // const playStoreUrl = "intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;";
      const timeout = 500; // Time in milliseconds before redirecting to Play Store
      let hasAppOpened = false;
  
      // Open the app using its custom URL scheme
      // window.location.href = appUrl;
      setButtonText("Open")
  
      // Use a timeout to detect if the app was not installed
      setTimeout(() => {
        if (!hasAppOpened) {
          console.log("App not installed, redirecting to Play Store...");
          setButtonText("Install1")
          // window.location.replace(playStoreUrl, "_blank");
        }else{
          setButtonText("Open1")
        }
      }, timeout);
  
      // Add an event to confirm the user has the app installed (optional)
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          hasAppOpened = true;
        }
      });
    };


    checkAmazonApp();
  }, []);

  // useEffect(() => {
  //   const appUrl = "nxtr://";
  //   const playStoreUrl = "market://details?id=com.totum.student";
  //   const timeout = 500; // Time in milliseconds before fallback
  //   let hasAppOpened = false;

  //   // Attempt to open the app using the custom URL scheme
  //   window.location.href = appUrl;

  //   // Use a timeout to check if the app is installed
  //   const timer = setTimeout(() => {
  //     if (!hasAppOpened) {
  //       console.log("App is not installed.");
  //       setButtonText("Install");
  //       window.location.href = playStoreUrl;
  //     }
  //   }, timeout);

  //   // Add an event listener to detect if the app is opened
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "hidden") {
  //       hasAppOpened = true;
  //       setButtonText("Open");
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);

  //   // Cleanup
  //   return () => {
  //     clearTimeout(timer);
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);

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
