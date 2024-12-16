import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Offer from "./components/Offer";
import BeautyDiscount from "./components/BeautyDiscount";
import Discoubts from "./components/Discoubts";
import BrandsPage from "./components/BrandsPage";
import SearchResults from "./components/SearchResults";

function App() {
  // Common button handler function
  const handleButtonClick = (componentName, slug) => {
    console.log(`Button clicked in ${componentName} component`);
    console.log(`Slug is ${slug}.`);
    // Add your specific logic here (e.g., API call, navigation, or state change;
    console.log("Clicked");
    // Determine the appropriate app URL based on the button clicked

    // /discount/
    //

    const appUrl = slug.includes("/offer")
      ? "https://totum.com/discount/john-greed/offer"
      : slug.includes("/beauty-discount")
      ? "https://totum.com/discounts/beauty"
      :slug.includes("/discounts" || "/search-results")
      ? "https://totum.com/discount"
      :slug.includes("/brands-page")
      ? "https://totum.com/discount/cult-beauty"
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
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/offer">Offer</Link>
            </li>
            <li>
              <Link to="/beauty-discount">Beauty-discount</Link>
            </li>
            <li>
              <Link to="/discounts">Discounts</Link>
            </li>
            <li>
              <Link to="/brands-page">Brands Page</Link>
            </li>
            <li>
              <Link to="/search-results">Search results</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes here */}
        <Routes>
          <Route
            path="/offer"
            element={<Offer handleButtonClick={handleButtonClick} />}
          />
          <Route
            path="/beauty-discount"
            element={<BeautyDiscount handleButtonClick={handleButtonClick} />}
          />
          <Route
            path="/discounts"
            element={<Discoubts handleButtonClick={handleButtonClick} />}
          />
          <Route
            path="/brands-page"
            element={<BrandsPage handleButtonClick={handleButtonClick} />}
          />
          <Route
            path="/search-results"
            element={<SearchResults handleButtonClick={handleButtonClick} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
