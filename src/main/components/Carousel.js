import React from 'react'
import {useState, useEffect} from "react";
import {images} from "../../resources/photoInfo.js"
import "../styles/carousel.css";


export const CarouselItem = ({width, image}) => {
    return(
        <div className="carousel-item" style={{width: width}} id={image.index}>
            <img src={image.src} alt={image.info}/>
        </div>
    )
}

function Carousel({children}) {
    const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * 10));
    const [paused, setPaused] = useState(true);

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = images.length -1;
        }
        else if (newIndex >= images.length){
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    // const currentImages = images.filter(image => image.index == activeIndex).map(image => {return <CarouselItem image={image}/>});

    useEffect(() => {
        const interval = setInterval(() => {
                updateIndex(activeIndex + 1);

        }, 4000);

        return () => {
            if(interval) {
                clearInterval(interval)
            }
        }
    })

    console.log(images[0].index);
    console.log(activeIndex);

    return(
        <div className="carousel"
        >
            <div className="inner">
                {images.filter(image => image.index == activeIndex).map(image => {return <CarouselItem image={image}/>})}
            </div>
            {/* <div className='indicators'
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
            </div> */}
        </div>
    )
}

export default Carousel