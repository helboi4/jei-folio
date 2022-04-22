import React from 'react'
import {images} from "../resources/photoInfo.js"
import Photo from "./Photo";
import "./photoList.css"

function PhotoList() {

    const photoComponents = images
        .map(image => {
            return(
                <Photo source={image}/>
            )
        });

    // const image = 100;
    
    return <div className="photoList">{photoComponents}</div>

}

export default PhotoList