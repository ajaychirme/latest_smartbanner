import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [applist, setApplist] = useState([]);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    // Check if the 'getInstalledRelatedApps' API is supported
    if ('getInstalledRelatedApps' in navigator) {
      navigator.getInstalledRelatedApps().then(apps => {
        if (apps.length > 0) {
          setApplist(apps);
          setIsAppInstalled(true);
        } else {
          setApplist([]);
          setIsAppInstalled(false);
        }
      }).catch(err => {
        console.error("Error fetching installed apps:", err);
        setApplist([]);
        setIsAppInstalled(false);
      });
    } else {
      console.log("getInstalledRelatedApps is not supported");
      setApplist([]);
      setIsAppInstalled(false);
    }
  }, []);

  const handleButtonClick = () => {
    const amazonUri = 'intent://scan/#Intent;scheme=nxtr;package=com.totum.student;end;';
    const fallbackUrl = 'https://www.amazon.com/dp/B08J5F3G18';

    if (isAppInstalled) {
      // Open the app if it is installed
      window.location.replace(amazonUri);
      clearHistory();
    } else {
      // Redirect to fallback URL if the app is not installed
      window.location.href = fallbackUrl;
    }
  };

  function clearHistory() {
    window.history.pushState({}, '', '/');
    window.history.pushState({}, '', '/');
    window.history.go(-1);
  }

  return (
    <div className="App">
      <p>Market android check nxtr added</p>
      <p>Applist:</p>
      {applist.length > 0 ? (
        <ul>
          {applist.map((app, index) => (
            <li key={index}>
              <strong>Platform:</strong> {app.platform} <br />
              <strong>URL:</strong> {app.url} <br />
              <strong>ID:</strong> {app.id}
            </li>
          ))}
        </ul>
      ) : (
        <p>No related apps are installed.</p>
      )}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt="App Logo"
      />
      <div className="button-container">
        <button className="btn2" onClick={handleButtonClick}>
          {isAppInstalled ? "Open the app" : "Install the app"}
        </button>
      </div>
    </div>
  );
}

export default App;
