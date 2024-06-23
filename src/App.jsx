import { Chatscreen } from "./components/chatScreen/Chatscreen"
import { Navbar } from "./components/navbar/Navbar"


function App() {

  return (
    <>
     <div className="bg-[#1a1b1c] w-full h-screen">
      <Navbar/>
      <Chatscreen/>
        </div>
    
    </>
  )
}

export default App
