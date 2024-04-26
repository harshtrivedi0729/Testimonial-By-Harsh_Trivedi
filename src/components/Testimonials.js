import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {
    let reviews = props.reviews;
    // use state no use kariyo
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        // jo index[ahiya review naam ni array ni vat thay che] ni value 0 thay to index ne last lindex(index-1) upar lai jav,..and nomarl case ma left shift ma index-1 karta jav
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler() {
        // math.random ma apanane random value 0 thi 1 ni vache male che mate apde tene review naam ni array ni legnth na number vade multiple kariye to apanane koik integer value male...for example..math.random thi 0.5 maliyu and review.lenght=5 che to ..math.random*review.length =(0.5)*(5)=2.5  che ane apde interger ma feravava mate apde "math.floor" no use karelo che ..j thi answer 2.5 no 2 thai jashe avi rite apanane random index mali jashe
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    // <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    // mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

<div className='w-[85vw] md:w-[700px] bg-pink-100 flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>


        <Card review = {reviews[index]}></Card>
     

      <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
