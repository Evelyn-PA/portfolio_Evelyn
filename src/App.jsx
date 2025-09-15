import { useState } from 'react'
import Header from "./Components/Top"
import Body from "./Components/Body"
import SButton from "./Components/StartButton"
import './App.css'

function App() {


  return (
    <div className='page'>
      <Header />
      <Body />
      <SButton/>
    </div>

  )
}

export default App
