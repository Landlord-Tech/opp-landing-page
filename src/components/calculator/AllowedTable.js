import React from "react"
import { addComma } from "../utils"

const AllowedTable = ({ data }) => {
  const { withoutOPP, withOPP, totalSavings } = data

  console.log({ data })
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
            <td>${addComma(withoutOPP?.petRate)}</td>
            <td>${addComma(withOPP?.petRate)}</td>
            <td>${addComma(withOPP?.petRate - withoutOPP?.petRate)}</td>
          </tr>
          <tr>
            <td>Pet Deposits</td>
            <td>${addComma(withoutOPP?.petDeposit)}</td>
            <td>${addComma(withOPP?.petDeposit)}</td>
            <td>${addComma(withOPP?.petDeposit - withoutOPP?.petDeposit)}</td>
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

export default AllowedTable
