import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text UpperCased", "Success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handlelwClick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text LOwerCased", "Success");
  };
  const handleReverse = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed", "Success");
  };
  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Extra Spaces Removed", "Success");
    if(newText===text){
      props.showAlert("No Extra Spaces Found");
    }
    
  };
  const handleclear = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  };
  const handleCopy = () => {
    let copy = document.getElementById("myBox");
    copy.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Text Copied To ClipBoard");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "#3e505b" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.Mode === "dark" ? "#cedada" : "white",
              color: props.Mode === "dark" ? "black" : "#3e505b",
            }}
          ></textarea>
        </div>

        <button
          className="" style={backgroundColor:"#444b6e"}
         
          onClick={handleUpClick}
        >
          Convert to upperCase
        </button>
        <button
          className="btn btn-primary mx-2"
          
          onClick={handlelwClick}
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2 "
         
          onClick={handleReverse}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-primary mx-2 "
         
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 "
         
          onClick={handleRemoveSpaces}
        >
          Remove Spaces
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{
           
          }}
          onClick={handleclear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "#3e505b" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length-1} Words and {text.length} Characters
        </p>

        <p>{0.008 * text.split(" ").length} mins </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something Above In The Text Area To Preview It Here"}
        </p>
      </div>
    </>
  );
}
