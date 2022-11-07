import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: {fields: date, order: DESC}, limit: 3) {
        nodes {
          title
          date(formatString: "MMM DD, YYYY")
          slug
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
  return (
    <div className="posts">
      <h2>Interessante Beiträge</h2>
      {

        posts.map((post, index) =>
          <div className="post" key={index}>
            <div className="post-image">
              <Link to={`/blog/${post.slug}`}>
                <GatsbyImage image={getImage(post?.featuredImage?.node?.localFile)} alt={`${post.title} image`} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <div className="author-image">
                <GatsbyImage image={getImage(post?.author?.node?.userImage?.userImage?.localFile)} alt={`${post?.author?.node?.firstName} ${post?.author?.node?.lastName} image`} />
                <div className="content">
                  <p>{post?.author?.node?.firstName} {post?.author?.node?.lastName}</p>
                  <p className="date">{post?.date}</p>
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

