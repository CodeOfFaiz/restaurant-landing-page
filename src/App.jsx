import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Speciality from "./components/Speciality"
import PopularFoods from "./components/PopularFoods"

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-slate-100">
    <Navbar/>
    <Hero/>
    <Speciality/>
    <PopularFoods/>
    </div>
    </>
  )
}

export default App
