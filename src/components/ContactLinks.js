import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const ContactLinks = () => {
    const data = useStaticQuery(graphql`
    {
      wp {
        acfOptionsThemeOption {
          themeOptions {
            emailIcon
            email {
              title
              url
            }
            phoneIcon
            phone {
              title
              url
            }
            locationIcon
            location
            location2
          }
        }
      }
    }
  `)
  let links = data?.wp?.acfOptionsThemeOption?.ThemeOptions  
  return (
    <div className="contact-links">
        <div className="contact-item">
            <div className="icon" dangerouslySetInnerHTML={{__html : links?.locationIcon }}></div>
        </div>
    </div>
  )
}

export default ContactLinks