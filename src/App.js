import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './main/pages/MainPage';
import PortraitsPage from './main/pages/PortraitsPage';
import FilmPage from './main/pages/FilmPage';
import MiscPage from './main/pages/MiscPage';
import ProjectsPage from './main/pages/ProjectsPage';
import BlogPage from './main/pages/BlogPage';
import BioPage from './main/pages/BioPage';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/portraits" element={<PortraitsPage/>}></Route>
          <Route path="/film" element={<FilmPage/>}/>
          <Route path="/other" element={<MiscPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/blogpage" element={<BlogPage/>}/>
          <Route path="/bio" element={<BioPage/>}></Route>
          <Route path="/jei"></Route>
          <Route path="/jei/login"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
