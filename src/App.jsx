import './App.css'
import { createContext, useState } from 'react'
import Button from "./components/Button/button"
import Banner from "./components/Banner/index"
import Card from "./components/Card/card"
import Testimonials from "./components/testimonials/index"

import bannerData from "./assets/bannerData"
import useToggle from './hooks/useToggle'

const BannerContext = createContext()

function App() {

  const [multiLine, setMultiLine] = useState(false)
  const [pic, setPic] = useState(true)
  const [open, toggleOpen] = useToggle()

  function onClick() {
    setMultiLine(prevState => !prevState)
  }

  function clickHandler() {
    setPic(prevState => !prevState)
  }

  return (
    <main>

      <div className='buttonDiv'>
        {/* Available Colors : Red, Green, Yellow, Blue, Indigo, Purple, Gray, Pink*/}
        <Button shape={"Square"} color={"Green"}> Button </Button>
        <Button shape={"Pill"} color={"Green"}> Button </Button>
      </div>
      
      <div className='bannerDiv'>
        {bannerData.map(data => (
          <BannerContext.Provider key={data.status} value={{ open, toggleOpen }}>
            <Banner status={data.status} clickHandler={toggleOpen} text={data.text}>
              <Banner.Title status={data.status}>{data.title}</Banner.Title>
              {open && (
                <Banner.Text status={data.status}>{data.text}</Banner.Text>
              )}
            </Banner>
          </BannerContext.Provider>
        ))}
      </div>
      
      <div className='cardDiv'>
        <Card className="card-comp">
          <h2 className='card-title'>Easy Development</h2>
          <p className='card-text'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
      </div>

      <div className='testimonialDiv'>
        <Testimonials clickHandler={clickHandler}>
          { pic ? 
            <Testimonials.WithPic /> :
            <Testimonials.WithoutPic />  
          }
        </Testimonials>
      </div>  
      
    </main>
  )
}

export default App
export { BannerContext }
