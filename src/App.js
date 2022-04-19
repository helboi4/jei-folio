import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './main/MainPage';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/jei"></Route>
          <Route path="/jei/login"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
