import React from 'react'
import img from "../assets/img1.avif";
function Test() {
  return (
    <div>
        <img src={img} alt="" />
      <button onMouseOver={(e)=>e.target.parentElement.children[0]}></button>
    </div>
  )
}

export default Test
