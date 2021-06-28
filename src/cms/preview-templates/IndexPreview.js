import React from 'react'
import PropTypes from 'prop-types'
import Index from '../../pages/index'

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data)
  console.log(getAsset)

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
