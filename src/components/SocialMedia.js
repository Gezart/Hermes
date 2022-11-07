import React from 'react'

const SocialMedia = ({themeOption}) => {
  return (
    <div className='home-sm'>
        <h3>{themeOption?.socialMediaTitle}</h3>
        <div className="all-sm">
                <a href={themeOption?.facebookLink?.url} rel='nofollow noopener noreferrer'  target="_blank">
                    <div className="item" rel='nofollow noopener noreferrer' dangerouslySetInnerHTML={{ __html: themeOption?.facebookIcon}}>

            </div>
                </a>
                <a href={themeOption?.twitterLink?.url} rel='nofollow noopener noreferrer' target="_blank">
            <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.twitterIcon}}>

            </div>

                </a>
                <a href={themeOption?.instagramLink?.url} rel='nofollow noopener noreferrer' target="_blank">
            <div className="item"  dangerouslySetInnerHTML={{ __html: themeOption?.instagramIcon}}>

            </div>
                </a>
                <a href={themeOption?.tiktokLink?.url} rel='nofollow noopener noreferrer' target="_blank">
            <div className="item" dangerouslySetInnerHTML={{ __html: themeOption?.tiktokIcon}}>

            </div>
                </a>
        </div>
    </div>
  )
}

export default SocialMedia