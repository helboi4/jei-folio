import React from 'react'

function Photo({source}) {
  return (
    <div className="photo">
        <img src={source}/>
    </div>
  )
}

export default Photo