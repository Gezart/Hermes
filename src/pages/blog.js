import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import Container from '../components/Container';

const blog = ({data}) => {
    let banner = data.allWp.nodes[0].acfOptionsBlogOption.blogOptions.banner
    let posts = data.allWpPost.nodes
  return (
   <main className='page page-blog'>
        <Layout>
            <Banner title={banner.title} image={banner.image} bannerSize="smallBanner" content={""}/>
            <Container>
              <Posts posts={posts} />
            </Container>
        </Layout>
   </main>
  )
}

export default blog

export const data = graphql`
query Blog {
    allWp {
      nodes {
        acfOptionsBlogOption {
          blogOptions {
            banner {
              title
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
            }
          }
        }
      }
    }
    allWpPost(sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        date(formatString: "DD MMM, YYYY")
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
`