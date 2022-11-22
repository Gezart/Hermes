import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Container from './Container';
import { useState } from 'react';
import LogoBlock from '../../LogoBlock.png'
const Header = ({setIsActive,isActive}) => {
  const [isOpen, setIsOpen] = useState(false)

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
    wpMenu(name: {eq: "Main Menu"}) {
      menuItems {
        nodes {
          label
          uri
          parentId
          id
          childItems {
            nodes {
              label
              uri
              id
            }
          }
        }
      }
    }
  }
  
  `)
  // const menuItems = data.allWpMenu.nodes[0].menuItems.nodes;
  let options = data.wp.acfOptionsThemeOption.themeOptions
  let menu = data.wpMenu.menuItems.nodes

  return (
    <header className="site-header">
      <div className="top-header"  onClick={() => setIsActive("")}>
        <Container>
          <div className="contact-item">
            <div className="icon" dangerouslySetInnerHTML={{ __html: options.jobIcon }}></div>
            <Link to={options.jobs.url} rel='nofollow noopener noreferrer'>{options.jobs.title}</Link>
          </div>
          <div className='mail-phone'>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.emailIcon }}></div>
              <Link to={options.email?.url} rel='nofollow noopener noreferrer'>{options.email?.title}</Link>
            </div>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.phoneIcon }}></div>
              <Link to={options.phone?.url} rel='nofollow noopener noreferrer'>{options.phone?.title}</Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="menu">
          <div className="logo" onClick={() => setIsActive("")}>
            <Link className={`${isOpen ? "absolute" : ""}`} to={`/`}>
              <img src={LogoBlock} alt="" />
            </Link>
            <svg className="menu-toggler" onClick={() => {
              setIsOpen(!isOpen);

            }} fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg>
          </div>

          <nav className={`navigation ${isOpen ? "active" : ""}`} >
            <svg className='close-menu' onClick={() => setIsOpen(!isOpen)} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z" /></svg>
            <ul className='main-menu'>
              {
                menu.map(mainItem =>
                  !mainItem.parentId ? (
                    <li key={mainItem.id}  onClick={() =>setIsActive(mainItem.label)}> 
                      {/* <Link to={mainItem.uri} onClick={() => {setIsOpen(!isOpen)}}> */}
                      <Link to={mainItem.uri}>
                        {mainItem.label}
                        {mainItem.childItems.nodes.length !== 0 && <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L6 6L1 1" stroke="#111827" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </Link>
                      { mainItem.childItems.nodes.length !== 0 ? (
                        <ul className='sub-menu'>
                          { mainItem.childItems.nodes.map(childItem =>
                            <li key={childItem.id}>
                              <Link to={childItem.uri}>
                                {childItem.label}
                              </Link>
                            </li>
                          )}
                        </ul>
                      ) : null
                      }
                    </li>

                  ) : null


                )}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header