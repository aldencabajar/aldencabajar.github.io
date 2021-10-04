import React from 'react';

export default function BlogCard(props) {
    return(
        <div className='blog-card'>
            <article key={props.id}>
                <h2>{props.title}</h2>
                <small>{props.time}</small>
                <p>{props.excerpt}</p>
            </article>
        </div>
    )
}