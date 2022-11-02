import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from './Container'

const ColoredBanner = ({ title, content, image }) => {
    const bannerImage = getImage(image?.localFile)
    return (
        <Container>
            <div className='coloredBanner'>
                <div className="image">
                    <GatsbyImage image={bannerImage} alt="Banner Image" />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </Container>
    )
}

export default ColoredBanner
