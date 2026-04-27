import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Speciality from "./components/Speciality"
import PopularFoods from "./components/PopularFoods"
import HowItWorks from "./components/HowItWorks"

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-slate-100">
    <Navbar/>
    <Hero/>
    <Speciality/>
    <PopularFoods/>
    <HowItWorks/>
    </div>
    </>
  )
}

export default App
