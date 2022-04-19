import React from 'react'
import {images} from "../resources/photoInfo.js"
import Photo from "./Photo";

function PhotoList() {

    const photoComponents = images
        .map(image => {
            return(
                <Photo className="photo" source={image}/>
            )
        });

    // const image = 100;
    
    return <div>{photoComponents}</div>

}

export default PhotoList