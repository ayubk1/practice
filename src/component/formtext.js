import React,{useState} from 'react'

export default function FormText(props) {
    const handleUpClick = () =>{
        console.log("enter uppercase alphabets here");
        let ntext = text.toUpperCase();
        setText(ntext);
    }
    const handleOnChange = (event) => {
        console.log("enter something here");
        setText(event.target.value);
    }
    const clear = () => {
      let ctext  = text;
      ctext = " "
      setText(ctext);
    }
    const handleLowClick = () =>{
      let etext = text.toLowerCase();
      setText(etext);
    }
    const [text, setText] = useState("");
    return ( 
    <>
  <div class="mb-3 my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
    <h1>
      {props.heading}
      </h1>
    <textarea className="form-control mb-3" style={{backgroundColor: props.mode === "dark" ? "#042743" : "white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary me-2" onClick={handleUpClick} >convert to Uppercase</button>
    <button className="btn btn-primary me-2" onClick={handleLowClick} >convert to Lowercase</button>
    <button className="btn btn-primary me-2" onClick={clear} >Clear Text</button>
  </div>
  <div style={{color: props.mode === "dark" ? "white" : "black"}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters and {text.split(".").length} Sentences.</p>
    <p>It {0.008 * text.split(" ").length} minutes to read the above paragraph </p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "write here"}</p>
  </div>
    </>
  )
}
