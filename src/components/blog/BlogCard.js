import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

function BlogCard({ data }) {
  const { heroHeading, path, category, excerpt, heroImg } = data
  return (
    <div className="blog-card">
      <Link to={path} className="image-wrapper">
        <GatsbyImage
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </Link>
      <p className="light-text">{category}</p>
      <h2 className="h4">
        <Link to={path}>{heroHeading}</Link>
      </h2>
      <p className="light-text">{data.date}</p>
      <p className="text">{excerpt}</p>
      <Link to={path} className="btn btn-sm primary">
        Read more
      </Link>
    </div>
  )
}

export default BlogCard
