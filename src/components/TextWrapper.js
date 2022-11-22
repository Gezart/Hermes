import React from 'react'

const TextWrapper = ({textWrapper}) => {
    console.log(textWrapper);
    let content = textWrapper?.content 
  return (
    <div className='subtitle-with-text'>
      <h3>{textWrapper?.title}</h3>
      <div dangerouslySetInnerHTML = {{ __html : content }}></div>
    </div>
  )
}

export default TextWrapper