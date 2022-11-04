import React from 'react'

const SubtitleWithText = ({subtitleWithText}) => {
  return (
    <div className='subtitle-with-text'>
        <h3> {subtitleWithText?.theSubtitle}</h3>
        <div dangerouslySetInnerHTML = {{ __html : subtitleWithText?.theContent }}></div>
    </div>
  )
}

export default SubtitleWithText