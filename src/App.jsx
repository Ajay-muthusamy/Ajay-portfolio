import Home from "./component/Home/Home"
import Self from "./component/SelfSection/Self"
import Contact from "./component/contact/Contact"

export default function App() {
  return (
    <>
    <div className="relative" id="app-conatainer">
      <Home/>
      <Self/>
      <Contact/>
      </div>
    </>
  )
}