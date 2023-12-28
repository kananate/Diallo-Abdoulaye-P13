import React from "react"



function FeatureItem({ image, alt, title, description }) {
  return (
    <div className='feature-item'>
      <img src={require(image)} alt={alt} className='feature-icon' />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureItem