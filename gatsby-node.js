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
                  ... on WpPage_Sections_Sections_Form {
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


          
                }
              }
            }
      }
    }
      
  
  `)

    if (wpData.errors) {
        console.error(wpData.errors)
    }


    const { allWpPage } = wpData.data
    allWpPage.nodes.forEach(page => {
        createPage({
            path: `/${page.slug}`,
            component: require.resolve(`./src/templates/page.js`),
            context: { page },
        })
    })

}