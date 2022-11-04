import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from './Container'

const ColoredBanner = ({bannerWithColor}) => {
    const bannerImage = getImage(bannerWithColor?.image?.localFile)
    return (
            <div className='coloredBanner'>
                <div className="image">
                    <GatsbyImage image={bannerImage} alt="Banner Image" />
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html : bannerWithColor?.content }}></p>
                </div>
            </div>
    )
}

export default ColoredBanner
