import React from "react";

export default function BeautyDiscount({handleButtonClick}) {
  return (
    <>
      <div>BeautyDiscount</div>
      <button className="btn2" onClick={() => handleButtonClick("Beauty Discount",window.location.href)}>
        Beauty Discount
      </button>
    </>
  );
}
