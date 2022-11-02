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


export default function Home({data}) {
 let sections = data.wpPage.sections.sections
 console.log('>>>>>>>>>>>', data.wpPage.sections.banner)
 let banner = data.wpPage.sections.banner
 return (
  <main>
  <Layout>
    <Seo title="Home - Home Cleaner" description="Clean your home with Home Cleaner" keywords="Home Cleaner, Cleaning"/>
    <Banner {...banner}/>
      {
          sections?.map((section, index) => {
              const typeName = section.__typename;
              switch(typeName){
              case 'WpPage_Sections_Sections_Text':
                  return <Text {...section} key={index}/>
              case 'WpPage_Sections_Sections_BannerWithColor':
                  return <ColoredBanner {...section} key={index}/>             
                case 'WpPage_Sections_Sections_Title':
                  return <Title {...section} key={index} />

              default: 
              return <p>No section</p>
              
              }              
          })
      }
  </Layout>
  </main>
)
}
export const data = graphql `
query PageQuery {
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
        ... on WpPage_Sections_Sections_BannerWithColor {
          title
          content
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
        ... on WpPage_Sections_Sections_Title {
          title
        }


      }
    }
  }
}
`

