import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3e505b";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "Success");
    }
  };
  return (

    <>
   
    
      <Navbar title="Textutils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
        <div className="container my-3">
        <Router>
          

<Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your Text here"
                  Mode={Mode}
                />
              }
            />
         
            <Route path="/about" element={<About />} />
            </Routes>
      </Router>
      </div>
      
    </>
  );
}

export default App;
