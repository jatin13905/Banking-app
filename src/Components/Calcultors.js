import React from 'react'
import "../CSS/calc.css";

const Calcultors = () => {
  return (
    <>

<div className='calc-main'>
   <div className='calc-heading'>
      <h1>Calculators For Your Needs</h1>
   </div>
   <div className='calc-card-div'>
      <div className='calc-cards'>
         <div className='card-content'>
            <div>
               <h2>Personal Loan Calculator</h2>
            </div>
            <div>
               <h5>Calculate your personal loan EMI</h5>
            </div>
         </div>
      </div>
      <div className='calc-cards'>
         <div className='card-content'>
            <div>
               <h2>Car Loan Calculator</h2>
            </div>
            <div>
               <h5>Calculate your dream car loan EMI</h5>
            </div>
         </div>
      </div>
      <div className='calc-cards'>
         <div className='card-content'>
            <div>
               <h2>Home Loan Calculator</h2>
            </div>
            <div>
               <h5>Calculate your dream home loan EMI</h5>
            </div>
         </div>
      </div>
      <div className='calc-cards'>
         <div className='card-content'>
            <div>
               <h2>FD Interest Calculator</h2>
            </div>
            <div>
               <h5>Calculate FD and RD returns</h5>
            </div>
         </div>
      </div>
   </div>
</div>

    </>
  )
}

export default Calcultors