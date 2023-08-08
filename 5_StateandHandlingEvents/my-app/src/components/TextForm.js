import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");
  // text = "New text"; //Wrong way
  // setText("New text"); //Correct way
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>
        Click Me
      </button>
    </div>
  );
}
