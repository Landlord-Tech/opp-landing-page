const calculatorWithNoPets = ({
                                rentalUnitCount,
                                unitPetRate
                              }) => {
  const savingPerYear = rentalUnitCount * 566 * unitPetRate
  const ROI = (savingPerYear - (rentalUnitCount * 60)) / (rentalUnitCount * 60)
  return {
    savingPerYear,
    ROI,
  }
}

module.exports = calculatorWithNoPets