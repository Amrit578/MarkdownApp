import { useState } from "react";
import ReactMarkdown from "react-markdown";
import './style.css';
const MarkDown = () =>{
    const [markdown,setMarkDown] = useState("Welcome to Markdown")
    return(
        <>
            <h1>MarkDown App</h1>
            <div className="center-div">
                <textarea className="left-side" value={markdown} onChange = {(event)=>setMarkDown(event.target.value)}></textarea>
                <div className="right-side"> 
                    <ReactMarkdown>{markdown}</ReactMarkdown> 
                </div>
            </div>
            <div className="text">
                <h2>Text Area</h2>
                <h2>Preview.</h2>
            </div>
        </>
    )
}

export default MarkDown;