import React from 'react'

export default function SearchResults({handleButtonClick}) {
  return (
    <>
       <div>SearchResults</div>
       <button className="btn2" onClick={() => handleButtonClick("Search",window.location.href)}>
        Search
      </button>
    </>
  )
}
