import React from 'react'
import Navbar from './Navbar';
import "./main.css";
import PhotoList from "./PhotoList";

function mainPage() {

  return (
    <div className="mainPage">
      <h1>Jei Ganiyeva</h1>
      <Navbar/>
      <PhotoList/>
    </div>
  )
}

export default mainPage;