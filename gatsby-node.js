exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const wpData = await graphql(`
    query PageQuery {
      allWpPage {
        nodes {
          slug
          title
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
                  ... on WpPage_Sections_Sections_Form {
                    fieldGroupName
                  }
                  ... on WpPage_Sections_Sections_Posts {
                    fieldGroupName
                  }
                  ... on WpPage_Sections_Sections_Image {
                    fieldGroupName
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
                  ... on WpPage_Sections_Sections_Button {
                    button {
                      title
                      url
                    }
                  }
                  ... on WpPage_Sections_Sections_KontaktInfo {
                    content
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            layout: FIXED
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                          )
                          fixed(height: 176, width: 176) {
                            base64
                            tracedSVG
                            aspectRatio
                            srcWebp
                            srcSetWebp
                            originalName
                          }
                        }
                      }
                    }
                  }
                  ... on WpPage_Sections_Sections_ContactLinks {
                    fieldGroupName
                  }
                  


          
                }
              }
            }
      }
      allWpPost{
        nodes {
          title
          slug
          date
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
    }
      
  
  `)

    if (wpData.errors) {
        console.error(wpData.errors)
    }

    const { allWpPost } = wpData.data
    allWpPost.nodes.forEach( post => {
      createPage({
        path: `blog/${post.slug}`,
        component: require.resolve(`./src/templates/post.js`),
        context: { post },
      })
    })

    const { allWpPage } = wpData.data
    allWpPage.nodes.forEach(page => {
        createPage({
            path: `/${page.slug}`,
            component: require.resolve(`./src/templates/page.js`),
            context: { page },
        })
    })

}