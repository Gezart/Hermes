import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Posts = ({ posts, title }) => {
  console.log('posts', posts);
  return (
    <div className="posts">
      {title && <h2>{title}</h2>}
      {
        posts?.map((post, index) =>
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
                <Link className='blog-link' to={post?.slug}>Weiterlesen →</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Posts



