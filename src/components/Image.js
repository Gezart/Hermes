import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Image = ({image}) => {
  return (
    <div className="image">
        <GatsbyImage image={getImage(image?.localFile)} alt="Image"/>
    </div>
  )
}

export default Image