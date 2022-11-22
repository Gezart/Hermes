import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'

const PlainText = ({ plainText, extraClass }) => {
    return (
        <div className={`plain-text ${extraClass}`}>
            {
                plainText.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="image">
                            <GatsbyImage image={getImage(item?.image?.localFile)} alt={`${item.title} image`} />
                        </div>
                        <div className="content">
                            <h2>{item?.title}</h2>
                            <h3>{item?.subtitle}</h3>
                            <p>{item?.content}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PlainText