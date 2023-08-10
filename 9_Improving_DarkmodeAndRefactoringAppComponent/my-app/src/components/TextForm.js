import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTitleClick = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        if (word.length > 0) {
          return word[0].toUpperCase() + word.slice(1);
        }
        return word;
      })
      .join(" ");
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleClearClick = () => {
    // console.log("You just clicked" +text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "New text"; //Wrong way
  // setText("New text"); //Correct way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lower Case
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleTitleClick}>
          Convert To Title Case
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>{text.length>0?text:"Enter something in the textbox to preview to preview"}</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
