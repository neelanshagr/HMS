import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import AddNewDoctor from "./Components/AddNewDoctor/AddNewDoctor";
import AddNewAdmin from "./Components/AddNewAdmin/AddNewAdmin";
import Messages from "./Components/Messages/Messages";
import Doctors from "./Components/Doctors/Doctors";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const { setIsAuthenticated, setAdmin } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4002/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin(null); // Set to null instead of an empty object for better null checks
      }
    };
    fetchUser();
  }, [setAdmin, setIsAuthenticated]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
