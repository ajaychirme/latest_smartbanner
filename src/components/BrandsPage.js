import React from 'react'

export default function BrandsPage({handleButtonClick}) {
  return (
    <>
      <div>BrandsPage</div>
      <button className="btn2" onClick={() => handleButtonClick("Brands Page",window.location.href)}>
        Brands Page
      </button>
    </>
  
  )
}
