import React, {useEffect} from 'react';
import Layout from 'components/layout';
import BlogCard from 'components/Blog/BlogCard';
import 'css/blog.css';
import { graphql } from 'gatsby';

export default function Blog({data}) {
    const {posts} = data.blog
    useEffect(()=>{
        console.log(posts)
    }, [posts])
    return(
        <Layout>
            <div className='section-body blog'>
                <header className='section-header'>
                    <h1>Blog</h1>
                    <h3>Documented ramblings and learnings.</h3>
                </header>
                <div className='blog-body'>
                    {posts.map(post=>{
                        return(
                        <BlogCard id={post.id} title={post.frontmatter.title}
                        time={post.frontmatter.date} excerpt={post.excerpt}
                        slug = {post.fields.slug} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )

}
 export const query = graphql` 
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
