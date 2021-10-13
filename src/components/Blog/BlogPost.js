import { graphql } from 'gatsby';
import React, {useEffect} from 'react';
import Layout from 'components/layout';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import 'css/blog-post.css'


export default function BlogPost( {data} ) {
    const post = data.markdownRemark
    const blogDate = new Date(post.frontmatter.date).toISOString().split('T')[0]

    useEffect(() =>{
        console.log(blogDate)
    })



    return(
        <Layout>
            <div className = 'section-body blog-post'>
                <header className ='blog-post-header'>
                    <h2>{post.frontmatter.title}</h2>
                    <h3 id='post-date'>{'posted on: ' + blogDate}</h3> 
                </header>
                <Divider className='blog-post-divide'/>
                <Paper className='blog-post-canvas' elevation={1}>
                    <div className='blog-post-content' dangerouslySetInnerHTML={{__html: post.html}} />
                </Paper>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug}}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`