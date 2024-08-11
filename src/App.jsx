import Navbar from "./component/Navbar/Navbar"
import ParticlesBg from "./component/ParticlesBg/ParticlesBg"
import Home from "./component/Home/Home"
import Self from "./component/SelfSection/Self"
import Contact from "./component/contact/Contact"
import Footer from "./component/Footer/Footer"

export default function App() {
  return (
    <>
    <div className="relative" id="app-conatainer">
      <Navbar/>
      <Home/>
      <Self/>
      <Contact/>
      <Footer/>
      <ParticlesBg/>
      </div>
    </>
  )
}