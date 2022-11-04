import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const KontaktInfo = ({image, content}) => {
  return (
    <div className="kontakt-info">
        <GatsbyImage image={getImage(image?.localFile)} alt="Kontakt image"/>
        <div className="kontakt-content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default KontaktInfo