import React from 'react'

const SocialMedia = ({themeOption}) => {
  return (
    <div className='home-sm'>
        <h3>{themeOption?.socialMediaTitle}</h3>
        <div className="all-sm">
                <a href={themeOption?.facebookLink?.url}  target="_blank">
                    <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.facebookIcon}}>

            </div>
                </a>
                <a href={themeOption?.twitterLink?.url}  target="_blank">
            <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.twitterIcon}}>

            </div>

                </a>
                <a href={themeOption?.instagramLink?.url}  target="_blank">
            <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.instagramIcon}}>

            </div>
                </a>
                <a href={themeOption?.tiktokLink?.url}  target="_blank">
            <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.tiktokIcon}}>

            </div>
                </a>
        </div>
    </div>
  )
}

export default SocialMedia