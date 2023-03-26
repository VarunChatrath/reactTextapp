// import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

// import About from './Components/About';

function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
 
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
      // document.title="MyApp - Dark Mode"
      // setInterval(() => {
      //   document.title="Welcome To Myapp"
      // }, 2000);
      // setInterval(() => {
      //   document.title="This is best app"
      // }, 1500);
    }
   
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title="MyApp - Light Mode"
    }
  }

  return (
    <>
      <Navbar title="MyFirstApp" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
         <Alert alert={alert}/>
       <div className="container my-3">
      
      
      
      
      <Textform Heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
      {/* <About/> */}
      
      </div> 
    </>
  );
}

export default App;
