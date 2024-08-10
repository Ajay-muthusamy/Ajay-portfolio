import Navbar from "./component/Navbar/Navbar"
import ParticlesBg from "./component/ParticlesBg/ParticlesBg"
import Home from "./component/Home/Home"

export default function App() {
  return (
    <>
    <div className="relative" id="app-conatainer">
      <Navbar/>
      <ParticlesBg/>
      <Home/>
      </div>
    </>
  )
}