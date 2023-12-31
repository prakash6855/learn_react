import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState('light'); //To check whether darkmode is enabled or not
const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1300);
}
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Our Community"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode ={Mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/> 
      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter your text here..." mode ={Mode}/>
      </div>
    </>
  );
}

export default App;
