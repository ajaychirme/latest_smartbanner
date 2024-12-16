import React from "react";

export default function Discoubts({handleButtonClick}) {
  return (
    <>
      <div>Discoubts</div>
      <button className="btn2" onClick={() => handleButtonClick("Discounts",window.location.href)}>
        Discounts
      </button>
    </>
  );
}
