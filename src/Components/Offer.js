import React from 'react'
import "../CSS/offer.css"

const Offer = () => {
  const img1 = `https://1.bp.blogspot.com/-1KRsctUOWQI/X2TWCtjBm3I/AAAAAAAAFJ8/V2IRyNLPvaod1-GFXrIYXSa7AVoMybSvgCLcBGAsYHQ/s562/HDFC%2BCashback%2BOffer.jpg`;
  const img2 = `https://images.fintra.co.in/cms/icici-bank-credit-cards.png`;
  const img3 = `https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/4d7cb1e1-d2d8-45c5-9a68-08d96f5bb9a4/Common/Campaign/Images/2022/Dec-2022/21/Adapts/Post-NetBanking-Banners-340x140-1.jpg`;
  return (
    <>

    <div className='offer-main-div'>

      <div className='offer-head'>
        <h1>
        Current Offers
        </h1>
      </div>

      
      <div className='main-content'>

      <div className='div-1 col-3 d-inline-block'>
        <h3>Card Offers</h3>

        <div className='div-2'>
        
        <div className='demo1'>
          <img src={img1} alt="" srcset="" />
          <img src={img2} alt="" srcset="" />
          <img src={img3} alt="" srcset="" />
        </div>  


        </div>

      </div>

      <div className='div-1 col-3 d-inline-block'>
        <h3>Travel Offers</h3>

        <div className='div-2'>
        
        <div className='demo1'>
          <img src={img1} alt="" srcset="" />
          <img src={img2} alt="" srcset="" />
          <img src={img3} alt="" srcset="" />
        </div>  


        </div>
      </div>

      <div className='div-1 col-3 d-inline-block'>
        <h3>Electronics Offers</h3>

        <div className='div-2'>
        
        <div className='demo1'>
          <img src={img1} alt="" srcset="" />
          <img src={img2} alt="" srcset="" />
          <img src={img3} alt="" srcset="" />
        </div>  


        </div>
      </div>




      </div>



    </div>

    </>
  )
}

export default Offer