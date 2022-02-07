import React from "react"
import { formatPrice } from "../utils"

const AllowedTable = ({ data }) => {
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
            <td>Pet Rent</td>
            <td>{formatPrice(withoutOPP?.petRate)}</td>
            <td>{formatPrice(withOPP?.petRate)}</td>
            <td>{formatPrice(withOPP?.petRate - withoutOPP?.petRate)}</td>
          </tr>
          <tr>
            <td>Pet Deposits</td>
            <td>{formatPrice(withoutOPP?.petDeposit)}</td>
            <td>{formatPrice(withOPP?.petDeposit)}</td>
            <td>{formatPrice(withOPP?.petDeposit - withoutOPP?.petDeposit)}</td>
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

export default AllowedTable
