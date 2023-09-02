import './App.css'
import Button from "./components/Button/button"
import Banner from "./components/Banner/banner"
import Card from "./components/Card/card"
import Testimonials from "./components/testimonials/testimonials"

/* Available Colors : Red, Green, Yellow, Blue, Indigo, Purple, Gray, Pink*/

function App() {

  return (
    <main>

      <div className='buttonDiv'>
        <Button shape={"Square"} color={"Red"}> Button </Button>
        <Button shape={"Pill"} color={"Red"}> Button </Button>
      </div>
      
      <Banner />
      <Card />
      <Testimonials />
    </main>
  )
}

export default App
