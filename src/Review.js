import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = data[index]
  const checkednumber = (number)=>{
    if(number > data.length -1){
      return 0
    }
    if(number < 0){
      return data.length -1
    }
    return number
  }
  const nextperson = () =>{
    setIndex((index) =>{
      let newindex = index + 1;
     return checkednumber(newindex);
    })
  }
  const prevperson = () =>{
    setIndex((index) =>{
      let newindex = index + 1;
     return checkednumber(newindex);
    })
  }
  const randomperson = () =>{
    let randomnumber = Math.random() * data.length;
    console.log(randomnumber)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author' >{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevperson} >
          <FaChevronLeft />
        </button>
        <button  className="next-btn" onClick={nextperson}  >
          <FaChevronRight />
        </button>
        <button onClick={randomperson} className="random-btn">
          Suprise me!
        </button>
      </div>
    </article>
  );
};

export default Review;
