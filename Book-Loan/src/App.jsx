
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Shop from "./pages/Shop"
import DashBoard from "./pages/DashBoard"
import Home2 from "./pages/Home2"

function App() {
  
  return (
    <>
      <Routes>

        {/* public routes */}
        <Route path="/" element={<Home2/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/shop" element={<Shop/>}/>

        {/* private routes */}
        <Route path="/dashboard" element={<DashBoard/>}/>

      </Routes>
    </>
  )
}

export default App
