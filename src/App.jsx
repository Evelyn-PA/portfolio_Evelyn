import { useState } from 'react'
import Header from "./Components/Top"
import Body from "./Components/Body"
import SButton from "./Components/StartButton"
import Nav from "./Components/Nav"
import './App.css'

function App() {


  return (
    <div className='page'>
      <Header />
      <Body />
      <div className='navAndBtn'>
        <SButton />
        <Nav />
      </div>
    </div>

  )
}

export default App
