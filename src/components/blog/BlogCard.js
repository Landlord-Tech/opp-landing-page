import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

function BlogCard({ data }) {
  let { title, path } = data
  console.log({data});
  return (
    <div className="blog-card">
      <Link to={path} className='image-wrapper'>
        {/*<GatsbyImage
          alt={data.title}
          image={getImage(data.image)}
          formats={["AUTO", "WEBP", "AVIF"]}
        />*/}
        <StaticImage
          src="../images/phones.png"
          // width={300}
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Why Choose OurPetPolicy?"
          placeholder="transparent"
        />
      </Link>
      {/*<p className='light-text'>{data.category}</p>*/}
      <p className='light-text'>Category 1</p>
      {/*<h2 className='h4'>{title}</h2>*/}
      <h2 className='h4'><Link to={path}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lacus metus tellus.</Link></h2>
      <p className='light-text'>{data.date}</p>
      {/*<p className='text'>{data.excerpt}</p>*/}
      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mattis morbi enim, ut ipsum, accumsan pulvinar mattis. At.</p>
      <Link to={path} className='btn btn-sm primary'>Read more</Link>
    </div>
  )
}

export default BlogCard
