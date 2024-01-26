import React from 'react'
import './ListingStyle.css';
import people from '../assets/people.svg';
import place from '../assets/place.svg';
import product from '../assets/product.svg';
import program from '../assets/program.svg';
import add from '../assets/add.svg';
import quote from '../assets/quote.svg';
import testimg from '../assets/testimg.png';

export default function Listing() {
  return (<>
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
          <div className="outerListingDiv own">
            <div className="gridContainer own">
            <ListingCardOwn icon = {add}
                title='Add your own'
                text='Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page'
                btnText='new' />
          </div>
        </div>
          <div className="outerListingDiv testimony">
            <div className="gridContainer testimony">
            <Testimony icon = {quote}
                title='Testimonials'
                text='In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.'
                 />
          </div>
        </div>

        </>
  )
}

const Testimony =({icon, title, text, }) => {
return (
    <div className='listCardDiv testimony' >
        <div className='imageTitle'><img src={icon} alt="HobbyCue Logo" className="listIcon" />
        <span className='listTitle'>{title}</span></div>
        <p>{text}</p>
        <div className="testimonyDetails">
          <div className="audio-container">
            <audio controls className="audio-player">
              <source src="path/to/your/audio/file.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <img
              src={testimg}
              alt="Circular Image"
              className="circular-image"
            />
          </div>
          <div className='nameDetails'>
            <img
                src={testimg}
                alt="Circular Image "
                className="circular-image big"
              />
              <div>
            <h5 style={{color:'#8064A2'}}>Shubha Nagarajan</h5>
            <p style={{color:'#0096C8'}} >Classical Dancer</p>
            </div> 
          </div>
        </div>
    </div>
)
}
const ListingCardOwn =({icon, title, text, btnText}) => {
return (
    <div className='listCardDiv ' >
        <div className='imageTitle'><img src={icon} alt="HobbyCue Logo" className="listIcon" />
        <span className='listTitle'>{title}</span></div>
        <p>{text}</p>
        <button className='listBtn'>{btnText}</button>
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