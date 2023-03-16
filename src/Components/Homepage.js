import React from 'react';
import "../CSS/homepage.css";
import { Link } from 'react-router-dom';
import Ad from './Ad';
import Services from './Services';
import Calcultors from './Calcultors';
import Offer from './Offer';

const Homepage = () => {
  return (
    <>
    
    <div className='home-main-div'>

    
    <div className='adver-div'>

      <Ad/>

    </div>

    <div className="col-6 d-inline-block">
    <Services/>
    </div>

    <div className='col-6 d-inline-block'>
    <div className='offer-zone'>
    <h1>
      <Link to='/offers'>Offer Zone</Link>
    </h1>
    </div>
    </div>


    <div>
    <div className='customer-emp-div'>
      <div className='customer'>
        
        <Link to="/customer" className='home-link'>
        <h1>Customer</h1>
        </Link>
      </div>

      <div className='emp'>

        <Link to="/emp" className='home-link'>
        <h1>Employee</h1>
        </Link>

      </div>
    </div>
    <div className='content-under-1'>

      <div>
        <Link to='/loan-enquiry' className='home-link'>
          <h4>Need loan? Click for attractive loan schemes</h4>
        </Link>
      </div>

    </div>


    </div>


    <div>
      <Calcultors/>
    </div>
</div>
    </>
  )
}

export default Homepage