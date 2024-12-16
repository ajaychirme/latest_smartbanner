import React from 'react'

export default function Offer({handleButtonClick}) {
  return (
    <>
      <div>Offer</div>
      <button className="btn2" onClick={() => handleButtonClick("Offer Page",window.location.href)}>
        Offer Page
      </button>
    </>
  
  )
}
