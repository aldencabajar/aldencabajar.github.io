import React, {useEffect} from 'react';
import Layout from 'components/layout';
import BlogCard from 'components/Blog/BlogCard';
import ProjectHeader from 'components/utils/header';
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
              <ProjectHeader title={'Blog'} subtitle={'Documented ramblings and learnings'} />
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
