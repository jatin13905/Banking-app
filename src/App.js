import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Homepage from "../src/Components/Homepage";
import Customer from './Components/Customer';
import Employee from "./Components/Employee"
import Nav from './Components/Nav';
import Register from './Components/Register';
import Profile from "./Components/Profile"
import Loan from './Components/Loan';
import Footer from './Components/Footer';
import Offer from './Components/Offer';

function App() {
  return (
    
    <div className='app-main-div'>
    
    <Router>
    <Nav/>
      <Routes>
      
    <Route path="/" element={<Homepage/>}/>
    <Route path="/customer" element={<Customer/>}/>
    <Route path="/emp" element={<Employee/>}/>
    <Route path="/customer/register" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/loan-enquiry" element={<Loan/>}/>
    <Route path="/offers" element={<Offer/>}/>

      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
