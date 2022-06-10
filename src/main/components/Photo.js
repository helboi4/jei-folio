import React from 'react'

function Photo({source, info}) {
  return (
    <div className="photo">
        <img src={source} alt={info}/>
    </div>
  )
}

export default Photo