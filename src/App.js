import React from 'react'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './Components/Navbar'
import StripeImage from './Images/stripe.png'
import SideImage from './Images/sideImg.jpg'
import SideImage2 from './Images/sideImg2.jpg'
import FirstSlider from './Components/FirstSlider'
import SecondSlider from './Components/SecondSlider'
import FourCol from './Components/FourCol'
import MegaMenu from './Components/MegaMenu'
function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <MegaMenu />
      </div>
      <img src={StripeImage} width="100%" />
      <div className="first-slider-main-div">
        <div className="Firstslider-div">
          <FirstSlider />
        </div>
        <div className="sideImage-div1" style={{ textAlign: 'right' }}>
          <img className="sideimg" src={SideImage} alt="image here" />
        </div>
        <div className="sideImage-div2">
          <img className="sideimg" src={SideImage2} alt="image here" />
        </div>
      </div>
      <div className="second-slider-div">
        <SecondSlider />
      </div>
      <div>
        <FourCol />
      </div>
    </div>
  )
}

export default App
