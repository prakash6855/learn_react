import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {
  const [Mode, setMode] = useState('light'); //To check whether darkmode is enabled or not
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';

    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Our Community"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode ={Mode} toggleMode ={toggleMode}/>
      <div className="container my-5">
        <TextForm heading="Enter your text here..." mode ={Mode}/>
      </div>
    </>
  );
}

export default App;
