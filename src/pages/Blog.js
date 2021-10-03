import React from 'react';
import Layout from 'components/layout'
import { graphql } from 'gatsby';

export default function Blog({data}) {
    const {posts} = data.blog
    return(
        <Layout>
            <div className='section-body'>
                <header className='section-header'>
                    <h1>Blog</h1>
                    <h3>Documented ramblings and learnings.</h3>
                </header>
            </div>
        </Layout>
    )

}
 export const mdQuery = graphql` 
 query MyQuery {
     blog: allMar
 }


