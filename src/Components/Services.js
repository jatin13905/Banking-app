import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/services.css"
const Services = () => {

    const displayList = () =>{
        document.getElementById("display-list").style.display = "block"
    }
    const hideList = () =>{
        document.getElementById("display-list").style.display = "none"
    }

    return (
    <>
    
    <div>

            <div className='services-main'>

                    <div className='services-div-1'>
                        <li>
                            <h2 onMouseEnter={displayList} onClick={hideList}>Services</h2>
                            <div className='services-div-2' id='display-list' >
                            <ul>
                            <Link to="/profile">Account Information</Link>
                            </ul>
                            <ul>
                                <Link to="/loan-enquiry">Loan Centre</Link>
                            </ul>
                            <ul>
                            <Link to="/loan-enquiry">Education Loan</Link>
                            </ul>
                            <ul>Fixed Deposit/RD</ul>
                            <ul>Investment Schemes</ul>
                            </div>

                        </li>
                    </div>

            </div>

    </div>

    </>
  )
}

export default Services