import React, {useState, useEffect} from "react"
import './style/FooterSect.css'
import vect from '../../assets/images/vect.png'; 
import Social from '../../assets/images/Social.png';
import Frame53 from '../../assets/images/Frame53.png';
const Section = () => {
    return(
        <div className="footer">
            <div className="footContent"> 
            <div className='upToDate'>
        <div className='offer'>
        <h3 className='offers'> STAY UPTO DATE ABOUT</h3>
        <h3 className='offers'>OUR LATEST OFFERS</h3>
        </div>
        <div className=''>
        <div className='emailBox'>
          <p4 className='email'>  Enter your email address  <img src={vect} /></p4>
        </div>
        <div className='subscribeBox'>
            <p4 className='subscribe'> Subscribe To Newsletter</p4>
        </div>
        </div>
      </div>  
          <div className='aboutUs'>
      <div >
        <h1 className="footerDetail"> SHOP.CO</h1>
      <h4> We have clothes that suits your style and</h4>
        <h4> which you’re proud to wear. From </h4>
         <h4>women to men. </h4>
         <img src={Social} />
      </div>
      <div >
      
      <h2 className="footerDetails">COMPANY</h2>
        <h4> About</h4>
         <h4> Features</h4>
         <h4> Works</h4>
         <h4> Career</h4>
      </div>
      <div >
        <h2 className="footerDetails"> HELP</h2>
        <h4>Customer Support  </h4>
         <h4>Delivery Details </h4>
         <h4> Terms & Conditions </h4>
         <h4> Privacy Policy</h4>
      </div>
      <div >
      <h2 className="footerDetails"> FAQ</h2>
        <h4>Account </h4>
         <h4> Manage Deliveries</h4>
         <h4> Orders </h4>
         <h4> Payments</h4>
      </div>
      <div>
      <h2 className="footerDetails"> RESOURCES</h2>
        <h4>Free eBooks  </h4>
         <h4> Development Tutorial </h4>
         <h4> How to - Blog  </h4>
         <h4>Youtube Playlist</h4>
      </div>
      </div>
      <div >
      <div className="borderLine">
        </div>
        <div className="rights">
        <h4 className="copyright"> Shop.co © 2000-2023, All Rights Reserved</h4>
        <img src={Frame53}/>
        </div>
      </div>
            </div>
            
        
        </div>
    )
}
export default Section