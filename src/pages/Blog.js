import React, {useEffect} from 'react';
import Layout from 'components/layout';
import BlogCard from 'components/Blog/BlogCard';
import ProjectHeader from 'components/utils/header';
import 'css/blog.css';
import { graphql } from 'gatsby';


export default function Blog({data}) {
    const {posts} = data.allMarkdownRemark
    useEffect(()=>{
        console.log(posts.map((post)=>post.fields.slug))
        console.log(
          Object.entries(data).map(([k, node])=>{
            return node 
          })
          // Object.entries(data)
        )
    }, [posts])
    return(
      <Layout>
        <div className='section-body blog'>
          <ProjectHeader title={'Blog'} subtitle={'Documented ramblings and learnings'} />
          <div className='blog-body'>
            {Object.entries(data).map(([k, node])=>{
              return(
                  node.posts.map(post=>{
                    console.log(post.fields.slug)
                    return(
                      <BlogCard id={post.id} title={post.metadata.title}
                      time={post.metadata.date} 
                      excerpt={post.excerpt !== undefined ? post.excerpt : post.metadata.excerpt}
                      slug = {post.fields.slug} />
                    )
                })
              )
            })
            }
          </div>
        </div>
      </Layout>
    )

}
 export const query = graphql` 
  query MyQuery {
    allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        metadata: frontmatter {
          date(fromNow: true)
          title
          author
        }
        id
        excerpt
      }
    }
    allJupyterNotebook {
      posts: nodes {
        fields {
          slug
        }
        metadata {
          author
          title
          excerpt
          date(fromNow: true)
        }
        id
      }
    }
  }
`
