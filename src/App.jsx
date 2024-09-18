import { Navbar } from "./component/Navbar"
import { Footer } from "./component/Footer"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      {/* content */}
      <HomePage/>
      {/* footer */}
      <Footer/>
    </div>
  ) 
}

export default App
