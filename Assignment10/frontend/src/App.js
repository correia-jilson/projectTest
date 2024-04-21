
import './App.css';
import Home from './Component/Home';
import Layout from './Component/Layout';
import About from './Component/About';
import Login from './Component/Login';
import Register from './Component/Register';
import Admin from './Component/Admin';
import AdminPage from './Component/AdminPage';
import AddJobsPage from './Component/AddJobsPage';
import Employee from './Component/Employee';
import JobsList from './Component/JobsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Admin" element={<Admin/>}/>
        <Route path="AdminPage" element={<AdminPage/>}/>
        <Route path="AddJobsPage" element={<AddJobsPage/>}/>
        <Route path="JobsList" element={<JobsList/>}/>
        <Route path="Employee" element={<Employee/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



