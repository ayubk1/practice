import './App.css';
import Navbar from './component/navbar'
import FormText from './component/formtext'
// import About from './component/about'
import React,{useState} from 'react'
// import Alert from './component/Alert'
// import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  const [tchange, settchange] = useState("enable light mode");
  const [mode, setmode] = useState("dark");
  // const [alert, setAlert] = useState(null);

  // const showalert = (message, type) =>{
  //   setAlert({
  //   message: message,
  //   type: type
  // });
  // }


  const enable = () => {
    if(mode === "dark"){
      setmode("light");
      settchange("enable dark mode");
      document.body.style.backgroundColor = "white";
      // showalert("light mode is enabled", "success");
      document.title = "TextUtils - dark mode";

    }
    else
    {
      setmode("dark");
      settchange("enable light mode");
      document.body.style.backgroundColor = "#042743";
      // showalert("dark mode is enabled" , "success");
      document.title = " TextUtils - light mode";
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils"  title2="Home" mode={mode} enable={enable} tchange={tchange} />
    {/* <Alert alert={alert} /> */}
     <div className='container mb-3'>
        {/* <Routes> */}
          {/* <Route path="/About" */}
            {/* //  element={<About />}/> */}
          
          {/* <Route path="/" */}
             {/* element={<FormText heading="enter the text here." mode={mode}/> } /> */}
             <FormText heading="enter the text here." mode={mode}/>
        {/* </Routes> */}
        </div>
     {/* </BrowserRouter> */}
    
    </>
  );
} 

export default App;
