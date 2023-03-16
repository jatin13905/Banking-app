import React, { useState , useEffect} from 'react'
import "../CSS/profile.css"

const Profile = () => {

  const[userInfo,setuserInfo] = useState();
  const[myAcc,setmyAcc] = useState();
  const[myAccTo,setmyAccTo] = useState();
  const[amount,setamount] = useState();


  const callPage = async()=>{

    try{
      const response = await fetch('/profile',{
        method : "GET",
        headers:{
          Accept:"application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });
  
      const data = await response.json();
  

      setuserInfo(data);
      
      
      if(response.status===402){
        window.alert("Please Login")
        

      } 
    }catch(e){
      console.log(e);
    }

  }
      useEffect(()=>{
        callPage();
      },[1])
    
      //--------------------money Transfer--------------------//
      const  transMoney = async(e) =>{ 

        console.log(myAcc,myAccTo)
        e.preventDefault();
      
          const response = await fetch("/tranferMoney",{
            method:"POST",
            headers:{
              "Content-Type" : "application/json" 
            },
            body:JSON.stringify({
              myAcc,myAccTo,amount
            })
          })
      
          if(response.status === 200){
            window.alert("Transfered Money Successfully")
          }else{
            window.alert("Enter Correct Details")
          }
      
      }


    return (
    <>

        <div className='profile-main'>
          <div className='profile-info-main'>



            <div className='userDetails'>

            <h4>Hello {userInfo.name}!</h4>
            <h4>Account Number : {userInfo.accountNo}</h4>

            </div>



          </div>

          <div className='money-trans-div'>
            <h2>Transfer Money</h2>

            <div className='money-trans'>

            <div>
              <label className="col-2">From</label>
              <input type="number" placeholder='Your Account Number'  onChange={e=>{setmyAcc(e.target.value)}}/>
            </div>

            <div>
              <label className="col-2">To</label>
              <input type="number"  placeholder='Receivers Account Number' onChange={e=>{setmyAccTo(e.target.value)}} />
            </div>


            <div>
              <label className="col-2">Amount</label>
              <input type="number" placeholder='Enter ammount in ₹' onChange={e=>{setamount(e.target.value)}}/>
            </div>

            </div>

            <div>
              
            <button onClick={transMoney} className="btn btn-success"> Submit </button>
            </div>

          </div>

        </div>

    </>
  )
}

export default Profile