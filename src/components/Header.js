import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Container from './Container';
import { useState } from 'react';
import LogoBlock from '../../LogoBlock.png'
const Header = () => {

  const data = useStaticQuery(graphql`
  {
    wp {
      acfOptionsThemeOption {
        themeOptions {
          jobIcon
          jobs{
						title
            url
          }
          locationIcon
          location
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
        }
      }
    }
    allWpMenu {
      nodes {
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  }
  
  `)
  const menuItems = data.allWpMenu.nodes[0].menuItems.nodes;
  let options = data.wp.acfOptionsThemeOption.themeOptions
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="top-header">
        <Container>
          <div className="contact-item">
            <div className="icon" dangerouslySetInnerHTML={{ __html: options.jobIcon }}></div>
            <Link to={options.jobs.url}>{options.jobs.title}</Link>
          </div>
          <div className='mail-phone'>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.emailIcon }}></div>
              <Link to={options.email?.url}>{options.email?.title}</Link>
            </div>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.phoneIcon }}></div>
              <Link to={options.phone?.url}>{options.phone?.title}</Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="menu">
          <div className="logo">
            <Link to={`/`}>
              <img src={LogoBlock} alt="" />
            </Link>
            <svg className="menu-toggler" onClick={() => {
              setIsOpen(!isOpen);

            }} fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg>
          </div>

          <nav className={`navigation ${isOpen ? "active" : ""}`} >
            <svg className='close-menu' onClick={() => setIsOpen(!isOpen) } fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z" /></svg>
            <ul>
              {
                menuItems.map((item, index) =>
                  <li key={index}>
                    <Link to={item.url}>{item.label}</Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header