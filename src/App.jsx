import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Top"
import Home from "./Pages/Home"
import Education from "./Pages/Education"
import Projects from "./Pages/Projects"
import SButton from "./Components/StartButton"
import Nav from "./Components/Nav"
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState("/Image/avt.gif");

  return (
    <Router>
      <div className="page">
        <Header />

        <div className="textnimg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />}/>
            <Route path="/projects" element = {<Projects/>}/>
          </Routes>
          <div className="img">
            <img src={currentImage} alt="avatar" id="avt-img" />
          </div>
        </div>

        <div className='navAndBtn'>
          <SButton />
          <Nav  setCurrentImage={setCurrentImage} />
        </div>
      </div>

    </Router>


  )
}

export default App
