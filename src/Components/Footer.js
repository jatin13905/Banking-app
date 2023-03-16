import React from 'react'
import "../CSS/footer.css"

const Footer = () => {
  return (
    <>


<div className="footer">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Account Information</a></li>
                                <li><a href="#">Loan Centret</a></li>
                                <li><a href="#">Education Loan </a></li>
                                <li><a href="#">Fixed Deposit/RD</a></li>
                                <li><a href="#">Investment Schemes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="/customer">Customer Page</a></li>
                                <li><a href="/employee">Employee Page</a></li>
                                <li><a href="/customer/register">New User</a></li>
                                <li><a href="#">Calculators</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today for new offer's</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>         
                </div> 
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2023 <a href="/">SBFC Bank</a>.</p>
                    </div>                 
                </div>                 
            </div>
        </div>


    </>
  )
}

export default Footer