const calculatorWithPets = ({
                                rentalUnitCount,
                                unitPetRate
                              }) => {
  const savingPerYear = rentalUnitCount * 508 * unitPetRate
  const ROI = (savingPerYear - (rentalUnitCount * 60)) / (rentalUnitCount * 60)
  return {
    savingPerYear,
    ROI,
  }
}

module.exports = calculatorWithPets