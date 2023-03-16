import React, { useState } from 'react'
import "../CSS/customer.css"
import { Link } from 'react-router-dom'
const Customer = () => {

  const[Idnum,setIdnum] = useState('');
  const[pass,setpass] = useState('');

  const submitfunc = async(e) =>{

    e.preventDefault();

    const response = await fetch("/logincustomer",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json" 
      },
      body:JSON.stringify({
        Idnum,pass
      })
    })

    if(response.status === 200){
      window.alert("Login")
    }else{
      window.alert("Enter Correct Details")
    }

  }

  return (
    <>

      <div className='c-main'>

      <div className='c-signup'>
        <h3>Don't have an account?</h3>
        <div>
          <button><Link to="/customer/register">Sign Up</Link></button>
        </div>
      </div>

      <div className='c-login'>
      <div>
        <div>
        <h2 className='login-heading'>Login</h2>
        </div>
        <div className='login-box'>

        <div>
          <label className="col-4">C.ID.</label>
          <input className='input-cid' type="text" placeholder='Customer ID' onChange={(e=>{setIdnum(e.target.value)})} />
        </div>

        <div>
          <label className="col-4">Password</label>
          <input className='input-cid' type="password" placeholder='Password'  onChange={(e)=>{setpass(e.target.value)}}/>
        </div>

        </div>
        
      </div>

      <div>
        <input type="submit" className="btn-dark btn" onClick={submitfunc} />
      </div>
      </div>
      </div>


    </>
  )
}

export default Customer