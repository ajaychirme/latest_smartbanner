import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [applist, setApplist] = useState([]);

  const handleOpen = () => {
    const amazonUri = 'intent://scan/#Intent;scheme=nxtr;package=com.totum.student;end;';
    const fallbackUrl = 'https://www.amazon.com/dp/B08J5F3G18';

    window.location.replace(amazonUri);
    clearHistory();
  };

  function clearHistory() {
    window.history.pushState({}, '', '/');
    window.history.pushState({}, '', '/');
    window.history.go(-1);
  }

  return (
    <div className="App">
      <p>Market android check nxtr added revert</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s"
        alt="App Logo"
      />
      <div className="button-container">
        <button className="btn2" onClick={handleOpen}>
          Open the app
        </button>
      </div>
    </div>
  );
}

export default App;
