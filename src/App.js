import React, { useEffect, useState } from "react";

const AppCheck = () => {
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [relatedApps, setRelatedApps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("getInstalledRelatedApps" in navigator) {
      navigator
        .getInstalledRelatedApps()
        .then((relatedApps) => {
          setRelatedApps(relatedApps);
          const appInstalled = relatedApps.some(
            (app) => app.id === "com.totum.student"
          );
          setIsAppInstalled(appInstalled);
        })
        .catch((err) => {
          setError(err.message);
          console.error("Error checking related apps:", err);
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
      {relatedApps.length > 0 ? (
        <div>
          <h3>Related Apps Found:</h3>
          <ul>
            {relatedApps.map((app, index) => (
              <li key={index}>
                <strong>Name:</strong> {app.platform} | <strong>ID:</strong>{" "}
                {app.id}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>No related apps found</h3>
      )}
      {error && <h3 style={{ color: "red" }}>Error: {error}</h3>}
      <p>
        {isAppInstalled
          ? "The Totum native app is installed!"
          : "The Totum native app is not installed."}
      </p>
    </div>
  );
};

export default AppCheck;
