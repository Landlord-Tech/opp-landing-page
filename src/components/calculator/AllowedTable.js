import React from "react"

const AllowedTable = ({ data }) => {
  const {withoutOPP, withOPP, totalSavings} = data

  console.log({ data })
  return (
    <div className='calculator-table-wrapper'>
      <table className='calculator-table'>
        <thead>
        <tr>
          <th/>
          <th><strong>WITHOUT</strong> OurPetPolicy</th>
          <th><strong>WITH</strong> OurPetPolicy</th>
          <th><strong>Difference</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Pet Rent</td>
          <td>${withoutOPP?.petRate}</td>
          <td>${withOPP?.petRate}</td>
          <td>${withoutOPP?.petRate - withOPP?.petRate}</td>
        </tr>
        <tr>
          <td>Pet Deposits</td>
          <td>${withoutOPP?.petDeposit}</td>
          <td>${withOPP?.petDeposit}</td>
          <td>${withoutOPP?.petDeposit - withOPP?.petDeposit}</td>
        </tr>
        <tr>
          <td>Fines and Fees</td>
          <td>${withoutOPP?.unAuthPetFee}</td>
          <td>${withOPP?.unAuthPetFee}</td>
          <td>${withOPP?.unAuthPetFee - withoutOPP?.unAuthPetFee}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>${withoutOPP?.propManageTime}</td>
          <td>${withOPP?.propManageTime}</td>
          <td>${withoutOPP?.propManageTime - withOPP?.propManageTime}</td>
        </tr>
        <tr>
          <td>Total costs</td>
          <td>${withoutOPP?.totalCost}</td>
          <td>${withOPP?.totalCost}</td>
          <td>${withoutOPP?.totalCost - withOPP?.totalCost}</td>
        </tr>
        </tbody>
      </table>
      <div className='calculator-table-total'>
        <h4 className='h4'>Total savings</h4>
        <h3 className='h3'>${totalSavings}</h3>
      </div>
    </div>
  )
}

export default AllowedTable
