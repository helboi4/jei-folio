import React from 'react'
import Navbar from '../components/Navbar';
import "../styles/main.css";
import { useState } from 'react';
import PhotoList from "../components/PhotoList";
import Carousel, {CarouselItem} from '../components/Carousel';
import {images} from "../../resources/photoInfo.js"

function mainPage() {

  return (
    <div className="mainPage">
      <Carousel/>
      <Navbar/>
      
    </div>
  )
}

export default mainPage;