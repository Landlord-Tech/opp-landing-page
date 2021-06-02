import React from "react"

const Table = () => {
  return (
    <div className='calculator-table-wrapper'>
      <table className='calculator-table'>
        <thead>
            <tr>
              <th/>
              <th>Without OurPetPolicy</th>
              <th>With OurPetPolicy</th>
              <th>Difference</th>
            </tr>
        </thead>
        <tbody>
           <tr>
             <td>Pet Damage</td>
             <td>$94,325</td>
             <td>$2,205</td>
             <td>$2,205</td>
           </tr>
           <tr>
             <td>Loss of Rent</td>
             <td>$94,325</td>
             <td>$2,205</td>
             <td>$2,205</td>
           </tr>
        </tbody>
      </table>
      <div>
        <h4 className='h4'>Total savings</h4>
        <h3 className='h3'>$93,100</h3>
      </div>
    </div>
  )
}

export default Table
