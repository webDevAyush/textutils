import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', 'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lover Case', 'success')
  };

  const handleClear = () => {
    setText("Write Here");
    props.showAlert('Content Cleared', 'success')

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = React.useState("");

  return (
    <>
      <div className='container' style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'light' ? 'black' : 'white'
            }}
            value={text}
            placeholder="Please Write Your text Here"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-secondary mx-3" onClick={handleClear}>
          Clear
        </button>
        <button
          className="btn btn-secondary mx-3"
          onClick={() => {
            // console.log("Copy Button is  pressed " + text)
            navigator.clipboard.writeText(text);
            // alert("Copied to clipboard.");
            props.showAlert('Content Coppied Sucessfully', 'success')

          }}
        >
          Copy to ClipBoard
        </button>
      </div>
      <div className="container my-3" style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}>
        <h1>Your text summary</h1>
        <p>
          {" "}
          {text.split(" ").length}words {text.length} characters{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter something To Preview IT'}</p>
      </div>
    </>
  );
}
