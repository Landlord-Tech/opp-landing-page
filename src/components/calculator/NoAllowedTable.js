import React from "react"
import { addComma } from "../utils"

const NoAllowedTable = ({ data }) => {
  const { withoutOPP, withOPP, totalSavings } = data

  return (
    <div className="calculator-table-wrapper">
      <table className="calculator-table">
        <thead>
          <tr>
            <th />
            <th>
              <strong>WITHOUT</strong> OurPetPolicy
            </th>
            <th>
              <strong>WITH</strong> OurPetPolicy
            </th>
            <th>
              <strong>Difference</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pet Damage</td>
            <td>${addComma(withoutOPP?.yearlyDamage)}</td>
            <td>${addComma(withOPP?.yearlyDamage)}</td>
            <td>
              ${addComma(withOPP?.yearlyDamage - withoutOPP?.yearlyDamage)}
            </td>
          </tr>
          <tr>
            <td>Loss of Rent</td>
            <td>${addComma(withoutOPP?.yearlyLostRent)}</td>
            <td>${addComma(withOPP?.yearlyLostRent)}</td>
            <td>
              ${addComma(withOPP?.yearlyLostRent - withoutOPP?.yearlyLostRent)}
            </td>
          </tr>
          <tr>
            <td>Fines and Fees</td>
            <td>${addComma(withoutOPP?.unAuthPetFee)}</td>
            <td>${addComma(withOPP?.unAuthPetFee)}</td>
            <td>
              ${addComma(withoutOPP?.unAuthPetFee - withOPP?.unAuthPetFee)}
            </td>
          </tr>
          <tr>
            <td>Time</td>
            <td>${addComma(withoutOPP?.propManageTime)}</td>
            <td>${addComma(withOPP?.propManageTime)}</td>
            <td>
              ${addComma(withOPP?.propManageTime - withoutOPP?.propManageTime)}
            </td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>${addComma(withoutOPP?.totalCost)}</td>
            <td>${addComma(withOPP?.totalCost)}</td>
            <td>${addComma(withOPP?.totalCost - withoutOPP?.totalCost)}</td>
          </tr>
        </tbody>
      </table>
      <div className="calculator-table-total">
        <h4 className="h4">Total savings</h4>
        <h3 className="h3">${addComma(totalSavings)}</h3>
      </div>
    </div>
  )
}

export default NoAllowedTable
