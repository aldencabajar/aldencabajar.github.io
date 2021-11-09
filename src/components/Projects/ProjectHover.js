import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";


export default function HoverImage(props) {
  const ghlogo =  "img/github-icon.png"
  const blog =  "img/blog-icon.png"
  const githubLink = String(props.gh)
  const blogLink = String(props.blog_link)
  const id = String(props.id)

  const linkStyle = {'textDecoration': 'none'}

  return(
    <div className="img-container">
      <GatsbyImage image={props.image} 
      alt={id}
      className="img-container-img-wrapper"
      />
      <div className="overlay">
          <a href={githubLink} style={linkStyle}>
          </a>
            <img src={ghlogo} className="ghlogo" alt="github-icon"/> 
          <a href={blogLink} style={linkStyle}>
          <img src={blog}  className="bloglogo" alt="blog-icon"/>
          </a>
      </div>
    </div>
  )
}
