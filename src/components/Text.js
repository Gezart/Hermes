import React from 'react'

const Text = ({content}) => {
    return (
        <div className='text'>
          <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
  )
}

export default Text
