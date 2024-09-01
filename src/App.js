import logo from "./logo.svg";
import "./App.css";

function App() {

  const handleOpen = () => {
    if (/android/i.test(navigator.userAgent)) {
      // window.location.href = "intent://amazon.com/#Intent;scheme=https;package=com.amazon.mShop.android.shopping;end";
      window.location.href = "intent://amazon.in/#Intent;scheme=https;package=com.amazon.mShop.android.shopping;end";
    } else {
      // Fallback or message for non-Android users
      alert("This action is only supported on Android devices.");
    }
  };

  return (
    <div className="App">
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
