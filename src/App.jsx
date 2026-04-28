import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Speciality from "./components/Speciality"
import PopularFoods from "./components/PopularFoods"
import HowItWorks from "./components/HowItWorks"
import FoodGallery from "./components/FoodGallery"
import Testimonials from "./components/Testimonials"
import OrderNow from "./components/OrderNow"

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-slate-100">
    <Navbar/>
    <Hero/>
    <Speciality/>
    <PopularFoods/>
    <HowItWorks/>
    <FoodGallery/>
    <Testimonials/>
    <OrderNow/>
    </div>
    </>
  )
}

export default App
