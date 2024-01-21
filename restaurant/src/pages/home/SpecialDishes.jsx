import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import {} from 'react-icons/fa6'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SimpleNextArrow = (props) => {
  const {className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{...style, display: "block",background: "red"}}
      onClick={onClick}
    >
      NEXT
    </div>
  )
}

const SimplePrevArrow = (props) => {
  const {className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{...style, display: "block",background: "red"}}
      onClick={onClick}
    >
      BACK
    </div>
  )
}

const SpecialDishes = () => {
    const [recipies, setRecipies] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json").then(res => res.json()). then(data => {
            const specials = data.filter((item) => item.category === "popular");
            //console.log(specials);
            setRecipies(specials);
        })
    })

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
      };
  return (
    <div className='section-container my-20'>
        <div className='text-left'>
            <p className='subtitle'>Special Dishes</p>
            <h2 className='title md:w-[52]'>Standout Dishes From Our menu</h2>
       </div>
      {/* arrow btn */}
       <div className='md:absolute right-3 top-80.5 mb-10 md:mr-24'>
        <button onClick={() => slider ?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 border-none text-white'>
          <FaAngleLeft className='w-8 h-8 p-1' />
        </button>
        <button onClick={() => slider ?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-orange border-none text-white'>
        <FaAngleRight className='w-8 h-8 p-1' />
        </button>
       </div>

        <div>
        <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'> 
            {
                recipies.map((item, i) => (
                    <Cards key={i} item={item} />
                ))
            }
        </Slider>
        </div>

    </div>
  )
}

export default SpecialDishes