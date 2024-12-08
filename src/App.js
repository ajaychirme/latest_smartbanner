import React, { useEffect, useState } from "react";
import { Plugins } from "@capacitor/core";
import { App } from "@capacitor/app";

const AppCheck = () => {
  const [isInstalled, setIsInstalled] = useState(null); // `null` for initial loading state
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const checkAppInstalled = async (packageName) => {
      try {
        const result = await App.isAppInstalled({ packageName });
        setResult(result);
        setIsInstalled(result.installed); // Set the state based on the result
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
      {error ? <h4>{error}</h4> : "No error"}
      {result ? <h4>{result}</h4> : "No result"}
    </div>
  );
};

export default AppCheck;
