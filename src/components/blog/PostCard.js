import React from "react"
import { Link } from "gatsby"

function PostCard({ data }) {
  let {  title, path } = data
  return (
    <div className="mb-4">
      <Link key={path} to={path}><h1>{title}</h1></Link>
    </div>
  )
}

export default PostCard