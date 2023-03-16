import React from 'react'
import "../CSS/loan.css"

const Loan = () => {
  return (
    <>  
  <div className='loan-main'>
   <form method="POST">
      <div className='loan-head'>
         <h1>Loan Application</h1>
      </div>
      <fieldset>
         <div className='sub-head'>
         <legend>Basic Information</legend>
         </div>
         <label for="first name">First Name</label>
         <input type="text" name="first-name" />
         <label for="middle initial">Middle Initial</label>
         <input type="text" name="middle initial" />
         <label for="last name">Last Name</label>
         <input type="text" name="last-name" />
         <br/>
         <label for="email address">Email</label>
         <input type="text" name="email" placeholder="janedoe31@yahoo.com" />
         <label for="telephone">Contact Number</label>
         <input type="text" name="telephone" />
         <br/>
         <label for="home address">Home Address</label>
         <input type="text" name="address" />
      </fieldset>
      <fieldset>
        <div className='sub-head'>
        <legend>Work Information</legend>
        </div>
         <label for="occupation">Current Occupation</label>
         <input type="text" name="occupation" />
         <label for="company name">Employer Name</label>
         <input type="text" name="company name" />
         <label for="company location">Employer Address</label>
         <input type="text" name="company location" />
      </fieldset>
      <fieldset>
         <div className='sub-head'>
         <legend>Loan Type & Amount</legend>
         </div>
         <input name="loan" list="type-of-loan"/>
            <br/>
            <label for="loan amount">Loan Amount</label>
            <input type="text" name="loan amount" />
      </fieldset>
      <fieldset>
      <div className='sub-head'>
      <legend>Length of Loan</legend>
      </div>
      <input type="radio" name="length-of-time" value="5"/>5
      <input type="radio" name="length-of-time" value="15"/>15
      <input type="radio" name="length-of-time" value="30"/>30
      </fieldset>
      <fieldset>
      <div className='sub-head'>
      <legend>Marital Status</legend>
      </div>
      <input type="checkbox" name="status" value="single"/>Single
      <input type="checkbox" name="status" value="married"/>Married
      <input type="checkbox" name="status" value="divorced"/>Divorced
      </fieldset>
      <fieldset>
      <div className='sub-head'>
      <div className='sub-head'>
      <legend>Special Considerations</legend>
      </div>
      </div>
      <label for="down payment">Down Payment</label>
      <input type="text" name="down payment" />
      <input type="checkbox" name="out-of-state" value="out-of-state"/>Out of State Resident
      <input type="checkbox" name="cosigner" value="cosigner"/>Cosigner
      <br/>
      <label for="name">Name of Cosigner</label>
      <input type="text" name="name-of-cosigner" />
      <label for="occupation">Cosigner Occupation</label>
      <input type="text" name="occupation" />
      </fieldset>
      <button className="btn btn-success mt-5" type="submit">Submit</button>
   </form>
</div>
    </>
  )
}

export default Loan