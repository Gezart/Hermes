import React from 'react'
import Container from './Container'

const Title = ({title}) => {
  return (
    <Container>
        <div className='title'>
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      </div>
    </Container>
  )
}

export default Title