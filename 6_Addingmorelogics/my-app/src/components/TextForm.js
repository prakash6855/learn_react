import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
  };
  const handleLoClick =() =>{
    // console.log("You just clicked" +text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "New text"; //Wrong way
  // setText("New text"); //Correct way
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-info mx-1" onClick={handleUpClick}>
        Click Here To Upper Case
      </button>
      <button className="btn btn-info mx-1" onClick={handleLoClick}>
        Click Here To Lower Case
      </button>
    </div>
    <div className="container my-2"> 
    <h2>Your text summary</h2>
    <p>{text.split(" ").length}words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Your Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
