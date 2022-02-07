import React from "react"
import Index from "../../pages/index"

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      // <h1>{data.heading}</h1>
      <Index datas={data} />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPreview
