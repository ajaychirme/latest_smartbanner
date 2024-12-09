import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [hasAppOpened, setHasAppOpened] = useState(false);
  const [buttonText, setButtonText] = useState("Install");
  const clickDone = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    const currentUrl = 'https://develop.totum.com/discount/ambassador-snooker-and-pool-clubs/get_offer_totum_app';

    const appUrl = currentUrl.includes('/discount/')
      ? currentUrl
      : 'nxtr://nux.user.search';
    
    const playStoreUrl = 'intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;';
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

  const setButtonTextOnMount = () =>{
    const currentUrl = 'https://develop.totum.com/discount/ambassador-snooker-and-pool-clubs/get_offer_totum_app';

    const appUrl = currentUrl.includes('/discount/')
      ? 'nxtr://'
      : 'nxtr://';
    
    const playStoreUrl = 'intent://details?id=com.totum.student#Intent;scheme=market;package=com.android.vending;end;';
    const timeout = 500; // Time in milliseconds before redirecting to Play Store
    let hasAppOpened = false;
    
    // Open the app using its custom URL scheme
    // window.location.href = appUrl;
    setButtonText("Open")
    // Use a timeout to detect if the app was not installed
    setTimeout(() => {
      if (!hasAppOpened) {
        console.log('App not installed, redirecting to Play Store...');
        setButtonText("Install")
        // window.location.replace(playStoreUrl);
      }
    }, timeout);
  }

  useEffect(() => {
    if(clickDone.currentUrl){
      clickDone.current.click();
    }
  }, [hasAppOpened]);
  return (
    <div className="App">
      <h3>{buttonText}</h3>
      <button style={{display:'none'}} ref={clickDone} onClick={setButtonTextOnMount}>Okay</button>
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
