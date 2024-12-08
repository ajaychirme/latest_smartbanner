import React, { useEffect, useState } from "react";

const AppCheck = () => {
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    if ("getInstalledRelatedApps" in navigator) {
      navigator
        .getInstalledRelatedApps()
        .then((relatedApps) => {
          setResult(relatedApps)
          const appInstalled = relatedApps.some(
            (app) => app.id === "com.totum.student"
          );
          setIsAppInstalled(appInstalled);
        })
        .catch((error) => {
          setError(error)
          console.log("Hiii");
          console.error("Error checking related apps:", error);
        });
    } else {
      console.warn(
        "getInstalledRelatedApps API is not supported on this browser."
      );
    }
  }, []);

  return (
    <div>
      <h1>Check if App is Installed</h1>
      {result?(<h3>{result}</h3>):<h3>No result</h3>}
      {error?(<h3>{error}</h3>):<h3>No result</h3>}
      {isAppInstalled ? (
        <p>The Totum native app is installed!</p>
      ) : (
        <p>The Totum native app is not installed.</p>
      )}
    </div>
  );
};

export default AppCheck;
