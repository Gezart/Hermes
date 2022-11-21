import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from './Container'

const Banner = ({title, content, image, bannerSize}) => {
  const bannerImage = getImage(image?.localFile)
  return (
    <div className={`banner ${bannerSize}`}>
        <div className="banner-image">
          <GatsbyImage image={bannerImage} alt="Banner Image"/>
        </div>
       <Container>
        <div className="banner-content">
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
       </Container>
    </div>
  )
}

export default Banner