import React from "react";
import { useState } from "react";
function TextForm(props) {
    const [text, setText] = useState("");
    function changeHandler(event){
        setText(event.target.value);
    }
    function clickHandler(){
        let newText=text.toUpperCase();
        setText(newText);
    }
    function clickLoHandler(){
        let newText=text.toLowerCase();
        setText(newText);
    }
    return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={changeHandler} id="myBox" rows="10"></textarea>
        <button className="btn btn-primary my-4" onClick={clickHandler}>Convert to Uppercase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={clickLoHandler}>Convert to Lowercase</button>
        </div>
    </div>
    <div className="container">
        <h3>Preview</h3>
        <p>
            {text}
        </p>
    </div>
    <div className="container">
        <h3>Text analysis</h3>
        <p>
            Number of characters: {text.length}
        </p>
        <p>
            Number of words: {text.split(" ").length}
        </p>
        <p>
            Time to read: {0.08*text.split(" ").length} minutes
        </p>
    </div>
    </>
  );
}

export default TextForm;
