import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Our Community"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-5">
        {/* <TextForm heading="Enter your text here..." /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
