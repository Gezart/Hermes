import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Container from '../components/Container';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const post = ({ pageContext: { post }, data }) => {
    let allPosts = data.allWpPost.nodes
  return (
    <main className={`post post-${post.slug}`}>
        <Layout>
            <Container>
            <div className="page-content-wrapper">
                <div className="post-wrapper">
                    <div className="post-image">
                        <GatsbyImage image={getImage(post.featuredImage?.node?.localFile)} alt={`${post.title} featured image`}/>
                    </div>
                    <div className="content">
                        <h1>{post.title}</h1>
                        <div className="author-image">
                            <GatsbyImage image={getImage(post?.author?.node?.userImage?.userImage?.localFile)} alt={`${post?.author?.node?.firstName} ${post?.author?.node?.lastName}`}/>
                            <div className="author-content">
                                <p>{post?.author?.node?.firstName} {post?.author?.node?.lastName}</p>
                                <p className="date">{post?.date}</p>
                            </div>
                        </div>
                        <div className="post-content" dangerouslySetInnerHTML={{  __html: post.content }}></div>
                    </div>
                </div>
                <Posts posts={allPosts} title={"Interessante Beiträge"}/>
            </div>
            </Container>
        </Layout>
    </main>
  )
}

export default post

export const data = graphql `
query postQuery {
    allWpPost(limit: 4){
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
}

`

