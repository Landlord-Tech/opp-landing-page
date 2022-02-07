import React from "react"
import { formatPrice } from "../utils"

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
            <td>{formatPrice(withoutOPP?.yearlyDamage)}</td>
            <td>{formatPrice(withOPP?.yearlyDamage)}</td>
            <td>
              {formatPrice(withOPP?.yearlyDamage - withoutOPP?.yearlyDamage)}
            </td>
          </tr>
          <tr>
            <td>Loss of Rent</td>
            <td>{formatPrice(withoutOPP?.yearlyLostRent)}</td>
            <td>{formatPrice(withOPP?.yearlyLostRent)}</td>
            <td>
              {formatPrice(
                withOPP?.yearlyLostRent - withoutOPP?.yearlyLostRent
              )}
            </td>
          </tr>
          <tr>
            <td>Fines and Fees</td>
            <td>{formatPrice(withoutOPP?.unAuthPetFee)}</td>
            <td>{formatPrice(withOPP?.unAuthPetFee)}</td>
            <td>
              {formatPrice(withOPP?.unAuthPetFee - withoutOPP?.unAuthPetFee)}
            </td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{formatPrice(withoutOPP?.propManageTime)}</td>
            <td>{formatPrice(withOPP?.propManageTime)}</td>
            <td>
              {formatPrice(
                withOPP?.propManageTime - withoutOPP?.propManageTime
              )}
            </td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>{formatPrice(withoutOPP?.totalCost)}</td>
            <td>{formatPrice(withOPP?.totalCost)}</td>
            <td>{formatPrice(withOPP?.totalCost - withoutOPP?.totalCost)}</td>
          </tr>
        </tbody>
      </table>
      <div className="calculator-table-total">
        <h4 className="h4">Total savings</h4>
        <h3 className="h3 bold">{formatPrice(totalSavings)}</h3>
      </div>
    </div>
  )
}

export default NoAllowedTable
