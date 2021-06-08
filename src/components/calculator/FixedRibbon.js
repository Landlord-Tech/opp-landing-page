import React from "react"
import { addComma } from "../utils"

const FixedRibbon = ({ saving = 93100, OPP = 5000, ROI = 450 }) => {
  return (
    <div className="fixed-ribbon">
      <div>
        <strong>Total savings</strong>
        <h3 className="h3 bold">${addComma(saving) || 0}</h3>
      </div>
      <div>
        <strong>Cost of OurPetPolicy</strong>
        <h3 className="h3 bold">${addComma(OPP) || 0}</h3>
      </div>
      <div>
        <strong>Total ROI</strong>
        <h3 className="h3 bold">{Math.round(ROI * 100) || 0} %</h3>
      </div>
    </div>
  )
}

export default FixedRibbon
