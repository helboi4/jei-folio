import React from 'react'

function Navbar({currentPage, setPage}) {

  const handlePageChange = (type) => {
    switch(type){
      case "portraits": setPage("portraits");
      break;
      case "film" : setPage("film");
      break;
      case "other": setPage("other");
      break;
      case "projects": setPage("projects");
      break;
      case "bio" : setPage("bio");
      break;
      case "blog" : setPage("blog");
    }

    console.log(currentPage);
  }


  return (
    <div className="navbar">
        <button onClick={() => handlePageChange("portraits")}>Portraits</button>
        <button onClick={() => handlePageChange("film")}>Film</button>
        <button onClick={() => handlePageChange("other")}>Other</button>
        <button onClick={() => handlePageChange("projects")}>Projects</button>
        <button onClick={() => handlePageChange("bio")}>Bio</button>
        <button onClick={() => handlePageChange("blog")}>Blog</button>
    </div>
  )
}

export default Navbar