import { useState } from 'react'
import { Header } from './components/header'
import { Main } from "./components/main"
import './App.css'

function App() {

  return (
    <>
      <div className='body'>
              <Header />
              <Main />
      </div>
    </>
  )
}

export default App
