import React, { useState } from 'react'

const Employee = () => {

  const[empId,setempId] = useState("");
  const[emppass,setemppass] = useState("");

  const loginEmp = async(e) =>{

    e.preventDefault();

    const response = await fetch("/loginemp",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json" 
      },
      body:JSON.stringify({
        empId,emppass
      })
    })



  }

  return (
    <>

      <div className='c-main'>
      <div>
        <div>
        <h2>Employee Login</h2>
        </div>

        <div>
          <label className="col-3">Employee ID</label>
          <input type="text" placeholder='Employee ID' onChange={(e)=>{setempId(e.target.value)}} />
        </div>

        <div>
          <label className="col-3">Password</label>
          <input type="password" placeholder='Password' onChange={(e)=>{setemppass(e.target.value)}} />
        </div>
      </div>

      <div>
        <input className="btn btn-success mt-5 m-auto" type="submit" onClick={loginEmp} />
      </div>
      </div>

    </>
  )
}

export default Employee