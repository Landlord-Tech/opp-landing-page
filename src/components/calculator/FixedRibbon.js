import React from "react"
import { formatPrice } from "../utils"

const FixedRibbon = ({ className, saving, OPP, ROI }) => {
  return (
    <div className={`${className} fixed-ribbon`}>
      <div>
        <strong>Total savings</strong>
        <h3 className="h3 bold">{formatPrice(saving, true)}</h3>
      </div>
      <div>
        <strong>Cost of OurPetPolicy</strong>
        <h3 className="h3 bold">{formatPrice(OPP, true)}</h3>
      </div>
      <div>
        <strong>Total ROI</strong>
        <h3 className="h3 bold">{Math.round(ROI * 100) || 0} %</h3>
      </div>
    </div>
  )
}

export default FixedRibbon
