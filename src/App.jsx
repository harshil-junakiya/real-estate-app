import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { SignUp } from "./pages/SignUp"
import { About } from "./pages/About"
import { SignIn } from "./pages/SignIn"
import { Profile } from "./pages/Profile"

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />   
      <Route path="/about" element={<About />} />   
      <Route path="/profile" element={<Profile />} />   
    </Routes>
  </BrowserRouter>
}