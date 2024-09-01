import logo from "./logo.svg";
import "./App.css";

function App() {

  const handleOpen = () => {
    if (/android/i.test(navigator.userAgent)) {
      // Attempt to open the Amazon app
      window.location.href = "intent://com.amazon.mShop.android.shopping/#Intent;scheme=https;package=com.amazon.mShop.android.shopping;end";
  
      // Fallback to Play Store if the app isn't opened
      setTimeout(() => {
        window.location.href = "market://details?id=com.amazon.mShop.android.shopping";
      }, 2000); // Delay before fallback
    } else {
      // Redirect to Amazon India website for non-Android users
      window.location.href = "https://www.amazon.in";
    }
  };
  

  return (
    <div className="App">
      <p>Market 1</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt=""
      />
      <div className="button-container">
        {/* <button className="btn" onClick={handleInstall}>Install the app</button> */}
        <button className="btn2" onClick={handleOpen}>
          Open the app
        </button>
      </div>
    </div>
  );
}

export default App;
