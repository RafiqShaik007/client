import Homepage from "./Components/HomePage"
import Menu from "./Components/MenuPage"
import LoginForm from "./Components/LoginPage"
import RegisterForm from "./Components/RegisterPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App