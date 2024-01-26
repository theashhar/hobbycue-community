import React from 'react'
import './ListingStyle.css';
import people from '../assets/people.svg';
import place from '../assets/place.svg';
import product from '../assets/product.svg';
import program from '../assets/program.svg';

export default function Listing() {
  return (
    <div className='outerListingDiv'>
        <div className="gridContainer">
            <ListingCard icon = {people}
            title='People'
            text='Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.'
            btnText='Connect' />
            <ListingCard icon = {place}
            title='Place'
            text='Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.'
            btnText='Meet up' />
            <ListingCard icon = {product}
            title='Product'
            text='Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.'
            btnText='Get it' />
            <ListingCard icon = {program}
            title='Program'
            text='Find events, meetups and workshops related to your hobby.  Register or buy tickets online.'
            btnText='Attend' />
        </div>
    </div>
  )
}

const ListingCard =({icon, title, text, btnText}) => {
return (
    <div className='listCardDiv' >
        <div className='imageTitle'><img src={icon} alt="HobbyCue Logo" className="listIcon" />
        <span className='listTitle'>{title}</span></div>
        <p>{text}</p>
        <button className='listBtn'>{btnText}</button>
    </div>
)
}