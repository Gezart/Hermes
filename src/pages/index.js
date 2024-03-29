import * as React from "react"
import { graphql } from "gatsby"
import '../../Assets/css/main.css'
import Banner from '../components/Banner';
import ColoredBanner from '../components/ColoredBanner';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Seo from "../components/Seo";
import Title from "../components/Title";
import Posts from "../components/Posts";
import Container from "../components/Container";
import PlainText from "../components/PlainText";
import Offers from "../components/Offers";
import Phone from "../components/Phone";
import SocialMedia from "../components/SocialMedia";
import TextWrapper from "../components/TextWrapper";

export default function Home({ data }) {

  let allPosts = data.allWpPost.nodes
  let homeOption = data.allWp.nodes[0].acfOptionsHomeOption.homeOption
  let themeOption = data?.allWp?.nodes[0].acfOptionsThemeOption.themeOptions
  let sections = data.wpPage.sections.sections
  let banner = data.wpPage.sections.banner
  console.log('>>>>>>>>>>>', homeOption)
  return (
    <main className="home">
      <Layout>
        <Seo title="Home - Hermes" description="Hermes" keywords="Hermes" />
        <Banner {...banner} />
        <Container>
          <div className="page-content-wrapper">
            <div className="all-sections">
              {
                sections && sections?.map((section, index) => {
                  const typeName = section.__typename;
                  switch (typeName) {
                    case 'WpPage_Sections_Sections_Text':
                      return <Text {...section} key={index} />
                    case 'WpPage_Sections_Sections_Title':
                      return <Title {...section} key={index} />
                    case 'WpPage_Sections_Sections_PlainText':
                      return <PlainText {...section} key={index} />

                    default:
                      return <p>No section</p>

                  }
                })
              }
            </div>
            <div className="right-side">
              <Phone themeOption={themeOption} />
              <Offers offers={homeOption.offers} />
              <SocialMedia themeOption={themeOption}/>
              <Posts posts={allPosts} title={"Interessante Beiträge"} />
            </div>
          </div>
          <ColoredBanner bannerWithColor={homeOption.bannerWithColor} />
          <TextWrapper textWrapper={homeOption.subtitleWithText} />
          <PlainText plainText={homeOption.plainText} extraClass="single-item"/>
        </Container>
      </Layout>
    </main>
  )
}
export const data = graphql`
{
  wpPage(title: {eq: "Home"}) {
    sections {
      banner {
          title
          content
          bannerSize
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
      }
      sections {
        __typename
        ... on WpPage_Sections_Sections_Text {
          content
        }
        ... on WpPage_Sections_Sections_Title {
          title
        }
        ... on WpPage_Sections_Sections_PlainText {
          plainText {
            showImage
            showTitle
            title
            subtitle
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
  allWpPost(limit: 3){
    nodes {
    title
    slug
    date(formatString: "DD MMM, YYYY")
    content 
    featuredImage {
        node {
        localFile {
            childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
            )
            }
        }
        }
    }
    author {
        node {
        firstName
        lastName
        userImage {
            userImage {
            localFile {
                childImageSharp {
                    gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            }
        }
        }
    }
    }
}
  allWp{
    nodes {
      acfOptionsHomeOption {
        homeOption {
          bannerWithColor {
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FIXED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          subtitleWithText {
            title
            content
          }
          offers {
            offersIcon
            offersTitle
            offersContent
          }
          plainText {
            title
            subtitle
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FIXED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
      acfOptionsThemeOption {
        themeOptions {
          iconPhoneHome
          phone {
            title
            url
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
        }
      }
    }
  }
}
`

