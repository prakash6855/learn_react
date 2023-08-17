import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };
  const handleLoClick = () => {
    // console.log("You just clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
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
    props.showAlert("Converted to Title case", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };
  const handleClearClick = () => {
    // console.log("You just clicked" +text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
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
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-2"
          onClick={handleUpClick}
        >
          Convert To Upper Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleLoClick}
        >
          Convert To Lower Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-2"
          onClick={handleTitleClick}
        >
          Convert To Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0 ? text.split(" ").length : 0} words and {text.length}{" "}
          characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Enter something in the textbox to preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
