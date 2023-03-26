import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        let d = text.toUpperCase();
        setText(d)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleClearClick = () => {
        // console.log("Clear Text was clicked")
        let d = "";
        setText(d)
        props.showAlert("Text cleared","success")
    }
    const handleDownClick = () => {
        // console.log("Lowercase was clicked")
        let d1 = text.toLowerCase();
        setText(d1)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnChange = (event) => {
        //  console.log("on change")
        setText(event.target.value)
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

    const [text, setText] = useState("Enter text here")
    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }} >
                <h1 >{props.Heading}</h1>

                <div className="mb-3">

                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} id="myBox" onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === "light" ? "black" : "white"}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some thing to preview here"}</p>

            </div>
        </>
    )
}
