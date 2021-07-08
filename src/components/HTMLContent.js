import React from "react"

const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

/*const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)*/

export default HTMLContent
