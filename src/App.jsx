import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import data from "./data"
import Travel from './components/Travel'

function App() {
  const travels = data.map((item) => {
    return(
      <Travel
        key = {item.id}
        {...item}
      />
    )
  })

  console.log(travels)

  return (
    <>
      <Header />
      <section className="travel--list">
        {travels}
      </section>
    </>
  )
}

export default App
