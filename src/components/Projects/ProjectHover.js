import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


export default function HoverImage(props) {
  const githubLink = String(props.gh)
  const blogLink = String(props.blog_link)
  const id = String(props.tag)

  const linkStyle = {'textDecoration': 'none'}

  return(
    <div className="img-container">
      <GatsbyImage image={props.image} 
      alt={id}
      className="img-container-img-wrapper"
      />
      <div className="overlay">
          <a href={githubLink} style={linkStyle}>
            <StaticImage src="../../../static/img/github-icon.png" 
            alt="github-icon" className="ghlogo" loading="lazy"/>
          </a>
          <a href={blogLink} style={linkStyle}>
            <StaticImage src="../../../static/img/blog-icon.png" 
            alt="blog-icon" className="bloglogo"/>
          </a>
      </div>
    </div>
  )
}
