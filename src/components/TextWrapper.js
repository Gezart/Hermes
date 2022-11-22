import React from 'react'

const TextWrapper = ({textWrapper}) => {
  return (
    <div className='subtitle-with-text'>
      <h3>{textWrapper.theSubtitle}</h3>
      <div dangerouslySetInnerHTML = {{ __html : theContent }}> </div>
    </div>
  )
}

export default TextWrapper