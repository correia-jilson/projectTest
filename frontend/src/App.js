import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChoosePlanPage from './components/ChoosePlanPage/ChoosePlanPage';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginPage/LoginForm';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Admin from './components/Admin';
import AdminPage from './components/AdminPage';
import AddPlansPage from './components/AddPlansPage';
import PlansList from './components/PlansList';
import User from './components/User';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <BrowserRouter>
        <Navbar />
        <Box component="main" style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/ChoosePlanPage/ChoosePlanPage" element={<ChoosePlanPage />} /> 
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/AdminPage" element={<AdminPage/>}/>
            <Route path="/AddPlansPage" element={<AddPlansPage/>}/>
            <Route path="/PlansList" element={<PlansList/>}/>
            <Route path="/user" element={<User />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
