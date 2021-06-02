import React from "react"

const NoAllowedTable = ({ data }) => {
  const {withoutOPP, withOPP, totalSavings} = data

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
             <td>Pet Damage</td>
             <td>${withoutOPP?.yearlyDamage}</td>
             <td>${withOPP?.yearlyDamage}</td>
             <td>${withOPP?.yearlyDamage - withoutOPP?.yearlyDamage}</td>
           </tr>
           <tr>
             <td>Loss of Rent</td>
             <td>${withoutOPP?.yearlyLostRent}</td>
             <td>${withOPP?.yearlyLostRent}</td>
             <td>${withOPP?.yearlyLostRent - withoutOPP?.yearlyLostRent}</td>
           </tr>
           <tr>
             <td>Fines and Fees</td>
             <td>${withoutOPP?.unAuthPetFee}</td>
             <td>${withOPP?.unAuthPetFee}</td>
             <td>${withoutOPP?.unAuthPetFee - withOPP?.unAuthPetFee}</td>
           </tr>
           <tr>
             <td>Time</td>
             <td>${withoutOPP?.propManageTime}</td>
             <td>${withOPP?.propManageTime}</td>
             <td>${withOPP?.propManageTime - withoutOPP?.propManageTime}</td>
           </tr>
           <tr>
             <td>Total costs</td>
             <td>${withoutOPP?.totalCost}</td>
             <td>${withOPP?.totalCost}</td>
             <td>${withOPP?.totalCost - withoutOPP?.totalCost}</td>
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

export default NoAllowedTable
