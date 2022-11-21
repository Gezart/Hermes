import React from 'react'

const SubtitleWithText = ({title, content}) => {
  return (
    <div className='subtitle-with-text'>
        <h3> {title}</h3>
        <div dangerouslySetInnerHTML = {{ __html : content }}></div>
    </div>
  )
}

export default SubtitleWithText