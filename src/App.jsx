import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Top"
import Home from "./Pages/Home"
import Education from "./Pages/Education"
import SButton from "./Components/StartButton"
import Nav from "./Components/Nav"
import './App.css'

function App() {


  return (
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <div className='navAndBtn'>
          <SButton />
          <Nav />
        </div>
      </div>

    </Router>


  )
}

export default App
