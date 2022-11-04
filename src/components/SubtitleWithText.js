import React from 'react'

const SubtitleWithText = ({subtitleWithText}) => {
  return (
    <div className='subtitle-with-text'>
        <h3> {subtitleWithText?.theSubtitle}</h3>
        <p dangerouslySetInnerHTML={{__html : subtitleWithText?.theContent }}></p>
    </div>
  )
}

export default SubtitleWithText