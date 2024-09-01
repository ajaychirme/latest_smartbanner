import logo from "./logo.svg";
import "./App.css";

function App() {

  const handleOpen = () => {
    // if (/android/i.test(navigator.userAgent)) {
    //   // Attempt to open the Amazon app
    //   window.location.href = "intent://com.amazon.mShop.android.shopping/#Intent;scheme=https;package=com.amazon.mShop.android.shopping;end";
  
    //   // Fallback to Play Store if the app isn't opened
    //   setTimeout(() => {
    //     window.location.href = "market://details?id=com.amazon.mShop.android.shopping";
    //   }, 2000); // Delay before fallback
    // } else {
    //   // Redirect to Amazon India website for non-Android users
    //   window.location.href = "https://www.amazon.in";
    // }

    const amazonUri = 'amazon://';
    // Define the fallback URL (e.g., a specific product page on Amazon)
    const fallbackUrl = 'https://www.amazon.com/dp/B08J5F3G18'; // Replace with your product URL or relevant Amazon page

    // Attempt to open the Amazon app using the URI scheme
    // window.location.href = amazonUri;
    window.location.replace(amazonUri);
    clearHistory();
    // Redirect to fallback URL after a short delay if the app is not installed
    // setTimeout(() => {
    //   alert('set timeout...')
    //   window.location.href = fallbackUrl;
    // }, 1000); // Adjust the timeout duration if necessary
  };

  function clearHistory() {
    // Push an empty state to clear URL fragment
    window.history.pushState({}, '', '/');
    
    // Push another state to ensure URL is reset
    window.history.pushState({}, '', '/');
    
    // Remove the current state from history
    window.history.go(-1);
  }
  
  

  return (
    <div className="App">
      <p>Market 0011</p>
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
