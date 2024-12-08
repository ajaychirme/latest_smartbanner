import React, { useEffect, useState } from "react";
import { App } from "@capacitor/app";
import { Plugins, Capacitor } from "@capacitor/core"; // Import Capacitor plugins

const AppCheck = () => {
  const [isInstalled, setIsInstalled] = useState(null); // `null` for initial loading state
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const checkAppInstalled = async (packageName) => {
      try {
        // Check if the platform is iOS or Android before calling isAppInstalled
        if (Capacitor.getPlatform() === "android" || Capacitor.getPlatform() === "ios") {
          const result = await App.isAppInstalled({ packageName });
          setResult(result);
          setIsInstalled(result.installed); // Set the state based on the result
        } else {
          setIsInstalled(false); // On web, assume the app is not installed
          setResult("Not available on Web");
        }
      } catch (error) {
        console.error("Error checking app installation:", error);
        setError(error);
        setIsInstalled(false); // Default to `false` if there's an error
      }
    };

    // Call the function with the desired package name
    checkAppInstalled("com.totum.student");
  }, []);

  return (
    <div>
      <h1>Smart Banner is here:</h1>
      {/* Conditionally render based on the installation status */}
      {isInstalled === null ? (
        <p>Checking app installation...</p>
      ) : isInstalled ? (
        <p>The app is installed.</p>
      ) : (
        <p>The app is not installed.</p>
      )}
      {error ? <h4>{error.message}</h4> : "No error"} {/* Display error message */}
      {result ? <h4>{JSON.stringify(result)}</h4> : "No result"} {/* Display result */}
    </div>
  );
};

export default AppCheck;
