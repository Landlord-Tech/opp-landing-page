import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Rotate from "../images/rotate.svg"

const RotatedView = () => {
  return (
    <div className='rotation-note'>
      <div className='container'>
        <div className="rotation-content">
          <div className="inner">
            <StaticImage src={'../images/rotate.svg'} alt="rotate" />
            <h2 className='h2'>Please rotate your phone for best experience.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RotatedView