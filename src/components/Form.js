import { useState } from "react";

export default function Form(props) {



    const handleUpClick = ()=>{
        let newText=text.toUpperCase()
        settext(newText)
        props.showAlert("Converted to Upper Case","success")
      }
      
      const handleUpChange = (event)=>{
        settext(event.target.value)
      }
      
      const handleLowClick=()=>{
        let newText=text.toLowerCase()
        settext(newText)
        props.showAlert("Converted to Lower Case","success")
      }
      
      const handleclearClick=()=>{
        let newText=" "
        settext(newText)
        props.showAlert("Text cleared","success")
    }

    


    const[text,settext]=useState("Enter text here")
  return (
    <div >
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
            <h1 style={{color : props.mode==='dark'?'white':'black'}}>
          {props.heading}
            </h1>
        </label>
        <textarea className="form-control" value={text} onChange={handleUpChange}id="myBox" rows="10" style={{backgroundColor : props.mode==='dark'?'#282828':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleUpClick}>Convert To UpperCase</button>
      <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleLowClick}>Convert To LowerCase</button>
      <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleclearClick}>Clear text</button>
      
    </div>

  );
}
