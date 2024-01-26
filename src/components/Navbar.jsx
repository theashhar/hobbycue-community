import React from 'react'
import './NavbarStyles.css';
import HobbyCueLogo from '../assets/HobbyCueLogo.png';
import { GoSearch } from 'react-icons/go'; 
import { FaCompass } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaBookmark, FaBell } from "react-icons/fa6";
// import { FaBell } from "react-icons/fa6";

import { BsFillCartFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className='navbarDiv'>
        <img src={HobbyCueLogo} alt="HobbyCue Logo" className="navbarLogo" />
        <SearchBar />
        <div className='horizontalFlex div'>
             <div className='horizontalFlex item'>
             <FaCompass color='#8064A2' />

                <h6>Explore</h6>
                <IoIosArrowDown />
             </div >
             <div className='horizontalFlex item'>
                <MdStars color='#8064A2' />
                <h6>Hobbies</h6>
                <IoIosArrowDown />
             </div>
             <FaBookmark color='#8064A2' />
             <BsFillCartFill color='#8064A2' />
             <FaBell color='#8064A2' />
             <button className='navSingn'>
                <h6>Sign In</h6>
             </button>
        </div>

    </div>
  )
}
const SearchBar = () => {
  return (
  <div className='searchDiv'>
    <input className='searchInput' type="search" placeholder="Search here..." />
    <button className='searchButton' >
      <GoSearch color='white' style={{ marginBottom:'3px' }} />
    </button>
</div>
  )}