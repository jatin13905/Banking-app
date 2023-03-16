import React, { useState } from 'react'
import "../CSS/register.css"
const Register = () => {

    const[name,setname] = useState("");
    const[padd,setpadd] = useState("");
    const[cadd,setcadd] = useState("");
    const[num,setnum] = useState("");
    const[email,setemail] = useState("");
    const[Idname,setIdname] = useState("");
    const[Idnum,setIdnum] = useState("");
    const[expdate,setexpdate] = useState("");
    const[pass,setpass] = useState("");


    const sendData = async(e) =>{
        
            e.preventDefault();

            const response = await fetch("/registercustomer",{
              method:"POST",
              headers:{
                "Content-Type" : "application/json" 
              },
              body:JSON.stringify({
                name,padd,cadd,email,num,Idname,Idnum,expdate,pass
              })
            })
            
            const data = await response.json();
            console.log(data);
            console.log(response);
            if(data.response===200){
              window.alert("Regestration Successful!");
            }else{
              window.alert("Error!");
            }
          
    }

  return (
    <>

    <div className='r-main'>

        <div>
        <div>
                    <h1 className="heading">Register New User</h1>
                </div>



            <form className='form-main' method="POST">

                <div >
                    <label  className="col-5" for="Name">Name</label>
                    <input onChange={(e)=>{setname(e.target.value)}} 
                    type="text" required/>
                </div>

                <div>                    
                    <label  className="col-5">Permanent Address</label>
                    <input onChange={(e)=>{setpadd(e.target.value)}}
                    type="text" required/>
                </div>

                <div>
                    <label  className="col-5">Current Address</label>
                    <input onChange={(e)=>{setcadd(e.target.value)}}
                    type="text" required/>
                </div>

                <div>
                    <label  className="col-5">Phone Number</label>
                    <input onChange={(e)=>{setnum(e.target.value)}} 
                    type="number" required/>
                </div>

                <div>                    
                    <label  className="col-5">Email</label>
                    <input onChange={(e)=>{setemail(e.target.value)}} 
                    type="email" />
                </div>

                <div>                    
                    <label className="col-5">ID Proof Name</label>
                    <input onChange={(e)=>{setIdname(e.target.value)}} 
                    type="text" required/>
                </div>

                <div>                    
                    <label className="col-5">ID Number</label>
                    <input onChange={(e)=>{setIdnum(e.target.value)}} 
                    type="number" required/>
                </div>

                <div>                    
                    <label className="col-5">Expiry of ID proof (if applicable)</label>
                    <input onChange={(e)=>{setexpdate(e.target.value)}}
                    type="date" />
                </div>

                <div>                    
                    <label className="col-5">Create Password</label>
                    <input onChange={(e)=>{setpass(e.target.value)}}
                    type="password" />
                </div>

                <div>
                    <p>
                    <input type="checkbox"/>
                        I assure that the all the information provided above is true,
                        any false information will lead to imprisonment.</p>
                </div>

                <div>
                    <button className="btn btn-success" onClick={sendData}>Register</button>
                </div>
            </form>
        </div>

    </div>

    </>
  )
}

export default Register