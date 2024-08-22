import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { useContext, useEffect } from 'react'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import axios from "axios";
import { Context } from "./main";
import Footer from './components/Footer'

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4002/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch{
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <ToastContainer position='top-center'></ToastContainer>
        <Footer/>
      </Router>
    </>
  )
}

export default App
