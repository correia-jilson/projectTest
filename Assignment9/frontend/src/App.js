
import './App.css';
import Login from './Component/login';
import Home from './Component/Home';
import About from './Component/About';
import JobListings from './Component/JobListings';
import Contact from './Component/Contact';
import CompanyShowcase from './Component/CompanyShowcase';
import Layout from './Component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="Login" element={<Login/>}/>
        <Route index element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="JobListings" element={<JobListings/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="CompanyShowcase" element={<CompanyShowcase/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



