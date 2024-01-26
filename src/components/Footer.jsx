import React from 'react'
import './FooterStyle.css';
import footer1 from '../assets/footer1.svg';
import footer2 from '../assets/footer2.svg';
import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube, FaTwitter, FaInstagram, FaPinterest, FaFacebook, FaTelegramPlane, FaGooglePlusG } from "react-icons/fa";


export default function Footer() {
  return (
<div  className="d-flex flex-column h-100">

<section  className="footerTop hero py-5 flex-grow-1 ">
    <div  className="container py-4">
        <div  className="row">
            <div  className="col-lg-6">
            <h1 className='fst-italic'>Your <span >hobby</span>, Your <span className='passion'>passion</span></h1>
            <button className='buttonColor ' >Get Started</button>
            <div className='vectorAlign '>
                <img src={footer1} alt="HobbyCue Logo" class="vectorImg img-fluid"   />
                <img src={footer2} alt="HobbyCue Logo" class="vectorImg img-fluid"  />
            </div>
            </div>
        </div>
    </div>
</section>


<footer  className="w-100 py-0 flex-shrink-0 mb-0">
    <div  className="container py-4">
        <div  className="row gy-4 gx-5">

            <div  className="col-lg-2 col-md-6">
                <h5  className=" mb-3">Hobbycue</h5>
                <ul  className="list-unstyled text-muted ">
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Work with Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div  className="col-lg-2 col-md-6">
                <h5  className=" mb-3">How Do I</h5>
                <ul  className="list-unstyled text-muted">
                    <li> Sign Up </li>
                    <li> Add a Listing </li>
                    <li> Claim Listing </li>
                    <li> Post a Query </li>
                    <li> Add a Blog Post </li>
                    <li> Other Queries </li>
                </ul>
            </div>
            <div  className="col-lg-2 col-md-6">
                {/* <h5  className="  mb-3">Quick links</h5> */}
                <h5  className="mb-3">Quick links</h5>
                <ul  className="list-unstyled text-muted text-black">
                    <li> Listings </li>
                    <li> Blog Posts </li>
                    <li> Shop / Store </li>
                    <li> Community </li>
                </ul>
            </div>
            <div  className="col-lg-4 col-md-6 ">
            <h5  className="mb-6">Social Media</h5>
                <ul  className="list-unstyled text-muted text-black d-flex justify-content-between mb-5 ">
                    <li> <FaFacebook /> </li>
                    <li> <FaTwitter /> </li>
                    <li> <FaInstagram /> </li>
                    <li> <FaPinterest /> </li>
                    <li> <FaGooglePlusG  /> </li>
                    <li> <FaYoutube /> </li>
                    <li> <FaTelegramPlane /> </li>
                </ul>
                <h5  className="mb-3">Invite Friends</h5>
                <form action="#">
                    <div  className="input-group mb-3">
                        <input  className="form-control" type="text" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                        <button class="btn  rounded-2 px-4 py-2"
             style={{border: '1px solid #8064A2', backgroundColor:'#8064A2' }} className="btn btn-primary" id="button-addon2" placeholder="Email"type="button">Invite</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        <div  className="footerbottom col-md-12 text-center py-4 ">

            <p  className="copyright m-0 fw-bold">  &copy; Purple Cues Private Limited </p>
          </div>
</footer>
</div>
  )
}
