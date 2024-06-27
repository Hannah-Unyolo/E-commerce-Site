import './index.css'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'

export function Bottomheader(){
    return(
        <div className='name'>
            <p>@ 2024 Hannah</p>
        </div>
    );
};


export function Links(){
    return(
        <div className='links'>
            <div>
                <h4>INFORMATION</h4>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div>
                <h4>EXTRAS</h4>
                <p>Brands</p>
                <p>Gift Vouchers</p>
                <p>Affiliates</p>
                <p>Specials</p>
            </div>
            <div>
                <h4>MY ACCOUNT</h4>
                <p>My Account</p>
                <p>Order History</p>
                <p>Wish List</p>
                <p>Newsletter</p>
            </div>
            <div>
                <h4>CUSTOMER SERVICE</h4>
                <p>Contact Us</p>
                <p>Returns</p>
                <p>Site Map</p>
                <p>Other Service</p>
            </div>


        </div>
    );
};


const Footer = ()=>{
    return(
        <div className='footer-items'>
           <h6>GET A NEWSLETTER:</h6>
           <input name="email" type="email" placeholder="Enter email address"class="input"/>

<h6>SUBMIT</h6>
<div className='footer-icons'>
<FaFacebook/>
<FaTwitter/>
<FaGooglePlus/> 
<FaPinterest/>
<FaLinkedin/>
<FaInstagram/>
</div>

        </div>
    );
};

export default Footer;