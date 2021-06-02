import React from "react"

const FixedRibbon = ({saving= 93100, OPP = 5000, ROI = 450}) => {
  return (
    <div className='fixed-ribbon'>
      <div>
        <strong>Total savings</strong>
        <h3 className='h3 bold'>${saving}</h3>
      </div>
      <div>
        <strong>Cost of OPP</strong>
        <h3 className='h3 bold'>${OPP}</h3>
      </div>
      <div>
        <strong>Cost of OPP</strong>
        <h3 className='h3 bold'>{Math.round(ROI * 100) || 0} %</h3>
      </div>
    </div>
  )
}

export default FixedRibbon
