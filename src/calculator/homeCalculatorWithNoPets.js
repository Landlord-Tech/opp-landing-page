const calculatorWithNoPets = ({ rentalUnitCount, unitPetRate }) => {
  const savingPerYear = Math.round(rentalUnitCount * 566 * unitPetRate)
  const ROI = Math.round(
    ((savingPerYear - rentalUnitCount * 60) * 100) / (rentalUnitCount * 60)
  )
  return {
    savingPerYear,
    ROI,
  }
}

module.exports = calculatorWithNoPets
