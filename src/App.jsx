import './App.css'
import { useState } from 'react'
import Button from "./components/Button/button"
import Banner from "./components/Banner/banner"
import Card from "./components/Card/card"
import Testimonials from "./components/testimonials/testimonials"

import bannerData from "./assets/bannerData"


function App() {

  const [multiLine, setMultiLine] = useState(false)

  function onClick() {
    setMultiLine(prevState => !prevState)
  }

  return (
    <main>

      <div className='buttonDiv'>
        {/* Available Colors : Red, Green, Yellow, Blue, Indigo, Purple, Gray, Pink*/}
        <Button shape={"Square"} color={"Red"}> Button </Button>
        <Button shape={"Pill"} color={"Red"}> Button </Button>
      </div>
      
      <div className='bannerDiv'>
        {
          bannerData.map(data => {
            return(
              <Banner key={data.status} status={data.status} text={data.text} clickHandler={onClick}>
                {data.title}
                <p className='banner-text'>{multiLine ? data.text : ""}</p>
              </Banner>
            )
          })
        }
        
      </div>
      
      <Card />
      <Testimonials />
    </main>
  )
}

export default App
