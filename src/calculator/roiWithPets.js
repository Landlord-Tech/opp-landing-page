const calculateROIWithPets = ({
  unitCount,
  avgRent,
  avgTenantLife,
  unitPerPetRate,

  petDamagePerIncidentRate,
  unAuthPetFee,
  petDeposit,
  petRentPerMonth,

  additionalTurnAroundTime,
  propManagementWagePerHour,
  fraudulentESAtoPetConversion,
  petApprovalRate,

  unAuthPetFeeRate,
  petPerRental,
  petDealTimeInHours,
  ESABeforeOPPRate,
}) => {
  const petWithoutOPP = Math.round(
    (unitCount * unitPerPetRate - ESABeforeOPPRate * unitCount) *
      petRentPerMonth *
      12 *
      petPerRental
  )
  const petWithOPP = Math.round(
    petWithoutOPP +
      unitCount *
        unitPerPetRate *
        ESABeforeOPPRate *
        fraudulentESAtoPetConversion *
        petRentPerMonth *
        12
  )

  const petDepositWithoutOPP = Math.round(
    (unitCount * unitPerPetRate - ESABeforeOPPRate * unitCount) * petDeposit
  )
  const petDepositWithOPP = Math.round(
    petDepositWithoutOPP +
      unitCount *
        unitPerPetRate *
        ESABeforeOPPRate *
        fraudulentESAtoPetConversion *
        petDeposit
  )

  const unAuthPetFeeWithoutOPP = Math.round(
    unitCount * unitPerPetRate * unAuthPetFee * unAuthPetFeeRate
  )
  const unAuthPetFeeWithOPP = Math.round(
    unitCount * unitPerPetRate * unAuthPetFee * petApprovalRate
  )

  const propManageTimeWithoutOPP = Math.round(
    unitCount *
      unitPerPetRate *
      propManagementWagePerHour *
      petDealTimeInHours +
      unitCount *
        unitPerPetRate *
        propManagementWagePerHour *
        petPerRental *
        ESABeforeOPPRate
  )
  const propManageTimeWithOPP = Math.round(
    propManageTimeWithoutOPP * fraudulentESAtoPetConversion -
      0.5 *
        propManagementWagePerHour *
        unitCount *
        unitPerPetRate *
        petDealTimeInHours
  )

  const totalSavings =
    petWithOPP -
    petWithoutOPP +
    petDepositWithOPP -
    petDepositWithoutOPP +
    unAuthPetFeeWithOPP -
    unAuthPetFeeWithoutOPP +
    propManageTimeWithoutOPP -
    propManageTimeWithOPP
  const totalCostForOPP = unitCount * 5 * 12
  const roi =
    Math.round(((totalSavings - totalCostForOPP) / totalCostForOPP) * 100) / 100

  return {
    withoutOPP: {
      petRate: petWithoutOPP,
      petDeposit: petDepositWithoutOPP,
      unAuthPetFee: unAuthPetFeeWithoutOPP,
      propManageTime: -propManageTimeWithoutOPP,
      totalCost:
        petWithoutOPP +
        petDepositWithoutOPP +
        unAuthPetFeeWithoutOPP -
        propManageTimeWithoutOPP,
    },
    withOPP: {
      petRate: petWithOPP,
      petDeposit: petDepositWithOPP,
      unAuthPetFee: unAuthPetFeeWithOPP,
      propManageTime: -propManageTimeWithOPP,
      totalCost:
        petWithOPP +
        petDepositWithOPP +
        unAuthPetFeeWithOPP -
        propManageTimeWithOPP,
    },
    totalSavings,
    totalCostForOPP,
    roi,
  }
}

module.exports = calculateROIWithPets
