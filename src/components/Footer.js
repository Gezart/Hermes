import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from './Container'
import LogoBlock from '../../LogoBlock.png'

const Footer = ({setIsActive}) => {
  const data = useStaticQuery(graphql`
  {
    wp {
      acfOptionsThemeOption {
        themeOptions {
          footerDescription
          footerMenuTitle
          footerMenu {
            title {
              ... on WpPage {
                title
                slug
              }
            }
          }
          policyTitle
          policyMenu {
            title {
              ... on WpPage {
                title
                slug
              }
            }
          }
          socialMediaTitle
          facebookIcon
          facebookLink{
					  title
            url
          }
          twitterIcon
          twitterLink{
            title
            url
          }
          instagramIcon
          instagramLink{
            title
            url
          }
          tiktokIcon
          tiktokLink{
            title
            url
        }
          emailTitle
          phoneTitle
          
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
  }
`)
  let options = data.wp.acfOptionsThemeOption.themeOptions
  let footerMenu = options.footerMenu
  let policyMenu = options.policyMenu
  return (
    <>
      <footer className='site-footer' onClick={() => setIsActive("")}>
        <Container>
          <div className="footer-wrapper">
            <div className="footer-logo">
              <img src={LogoBlock} alt="" />
              <p className="short-derscription">{options.footerDescription}</p>
            </div>
            <div className="footer-menu-wrapper">
              <h3>{options.footerMenuTitle}</h3>
              <ul className="footer-menu">
                {
                  footerMenu.map((menuItem, index) =>
                    <li key={index}><Link to={`/${menuItem.title.slug}`}>{menuItem.title.title}</Link></li>
                  )
                }
              </ul>
            </div>
            <div className="policy-menu-wrapper">
              <h3>{options.policyTitle}</h3>
              <ul className="policy-menu">
                {
                  policyMenu.map((menuItem, index) =>
                    <li key={index}><Link to={`/${menuItem.title.slug}`}>{menuItem.title.title}</Link></li>
                  )
                }
              </ul>
            </div>
            <div className="footer-contacts">
              <h3>{options.socialMediaTitle}</h3>
              <div className="sm-item">
                <a href={options.facebookLink?.url} target="_blank" dangerouslySetInnerHTML={{ __html: options.facebookIcon }}></a>
                <a href={options.twitterLink?.url} target="_blank" dangerouslySetInnerHTML={{ __html: options.twitterIcon }}></a>
                <a href={options.instagramLink?.url} target="_blank" dangerouslySetInnerHTML={{ __html: options.instagramIcon }}></a>
                <a href={options.tiktokLink?.url} target="_blank" dangerouslySetInnerHTML={{ __html: options.tiktokIcon }}></a>
              </div>
              {options.email.url &&
                <>
                  <h3>{options.emailTitle}</h3>
                  <a href={options.email.url}>{options.email.title}</a>
                </>
              }

              <h3>{options.phoneTitle}</h3>
              <a href={options.phone.url}>{options.phone.title}</a>
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright Home Cleaner.</p>
            <p>Made with love by <a href="https://www.nerdycreative.ch/" target="_blank">Nerdy Creative</a></p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer



