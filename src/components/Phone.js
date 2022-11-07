import React from 'react'
// import phone from '../../phone.png'
const Phone = ({themeOption}) => {
  return (
    <div className='home-kontakt'>
        <div className="phone-icon" dangerouslySetInnerHTML={{__html: themeOption.iconPhoneHome}}></div>
        <h3>KONTAKT</h3>
        <p>Rufen sie uns an</p>
        <a href={themeOption.phone.url} rel='nofollow noopener noreferrer'>{themeOption.phone.title}</a>
    </div>
  )
}

export default Phone