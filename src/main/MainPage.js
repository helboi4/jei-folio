import React from 'react'
import Navbar from './Navbar';
import "./main.css";
import PhotoList from "./PhotoList";
import { useState } from 'react';

function mainPage() {

  const [page, setPage] = useState("home");

  return (
    <div className="mainPage">
      <h1>Jei Ganiyeva</h1>
      <Navbar currentPage={page} setPage={setPage}/>
      <PhotoList/>
    </div>
  )
}

export default mainPage;