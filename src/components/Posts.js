import {useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Posts = () => {
    const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 4) {
        nodes {
          title
          date
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
    let posts = data.allWpPost.nodes
    console.log(posts[0].author?.node?.userImage.userImage?.localFile);
  return (
        <div className="posts">
          <h2>Interessante Beiträge</h2>
            {
                
                posts.map((post, index) =>
                    <div className="post" key={index}>
                        <div className="post-image">
                            <GatsbyImage image={getImage(post?.featuredImage?.node?.localFile)} alt={`${post.title} image`}/>
                        </div>
                        <div className="post-content">
                            <h3>{post.title}</h3>
                            <div className="author-image">
                                <GatsbyImage image={getImage(post?.author?.node?.userImage?.userImage?.localFile)} alt={`${post?.author?.node?.firstName} ${post?.author?.node?.lastName}`}/>
                                <div className="content">
                                    <p>{post?.author?.node?.firstName} {post?.author?.node?.lastName}</p>
                                    <div className="date"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
  )
}

export default Posts

