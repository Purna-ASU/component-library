import './App.css'
import { useState } from 'react'
import Button from "./components/Button/button"
import Banner from "./components/Banner/index"
import Card from "./components/Card/card"
import Testimonials from "./components/testimonials/testimonials"

import bannerData from "./assets/bannerData"
import { HiOutlineCloudUpload } from "react-icons/hi";


function App() {

  const [multiLine, setMultiLine] = useState(false)

  function onClick() {
    setMultiLine(prevState => !prevState)
  }

  return (
    <main>

      <div className='buttonDiv'>
        {/* Available Colors : Red, Green, Yellow, Blue, Indigo, Purple, Gray, Pink*/}
        <Button shape={"Square"} color={"Green"}> Button </Button>
        <Button shape={"Pill"} color={"Green"}> Button </Button>
      </div>
      
      <div className='bannerDiv'>
        {
          bannerData.map(data => {
            return(
              <Banner key={data.status} status={data.status} clickHandler={onClick} text={data.text}>
                <Banner.Title status={data.status}>{data.title}</Banner.Title>
                <Banner.Text status={data.status}>{multiLine ? data.text : ""}</Banner.Text>
              </Banner>
            )
          })
        } 
      </div>
      
      <div className='cardDiv'>
        <Card className="card-comp">
          <h2 className='card-title'>Easy Development</h2>
          <p className='card-text'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
      </div>

      <div className='testimonialDiv'>
        <Testimonials />
      </div>  
      
    </main>
  )
}

export default App
