import { useState } from "react";
import "../assets/Slideshow.css"
import background from "../assets/picture1.jpg"


function Slideshow() {
  let [back, setBack] = useState(0)
  const click = (inc) => {
    let state = setBack((back + inc) %5)
    if (back==-1) {
      state = setBack(4)
    } 
    
    console.log(back)
  }




  return (
    <div className="slideshow" style={{backgroundImage: "url("+background+")"}}>
      <button className="btnLeft" onClick={()=>click(-1)}>&lt;</button>
      <button className="btnRight" onClick={()=>click(1)}>&gt;</button>
    </div>
  );
}

export default Slideshow;
