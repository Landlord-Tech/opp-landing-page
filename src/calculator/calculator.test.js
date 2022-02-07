const calculateROIWithNoPets = require("./roiWithNoPets")
const calculateROIWithPets = require("./roiWithPets")

describe("Testing calculator ", () => {
  it("should calculate ROI without pets", () => {
    const result = calculateROIWithNoPets({
      unitCount: 350,
      avgRent: 1540,
      avgTenantLife: 18,
      unitPerPetRate: 0.7,

      petDamagePerTenantRate: 760,
      unAuthPetFee: 300,
      petDeposit: 400,
      petRentPerMonth: 35,

      additionalTurnAroundTime: 2,
      propManagementWagePerHour: 50,
      petReductionRate: 0.5,
      petApprovalRate: 0.4,

      unAuthPetFeeRate: 0.03,
      petDamageRate: 0.75,
      petDealTimeInHours: 0.5,
      damageDealTimeInHours: 2,
    })

    expect(result.withoutOPP.yearlyDamage).toEqual(93100)
    expect(result.withoutOPP.yearlyLostRent).toEqual(94325)
    expect(result.withoutOPP.unAuthPetFee).toEqual(2205)
    expect(result.withoutOPP.propManageTime).toEqual(24500)

    expect(result.withOPP.yearlyDamage).toEqual(46550)
    expect(result.withOPP.yearlyLostRent).toEqual(47163)
    expect(result.withOPP.unAuthPetFee).toEqual(29400)
    expect(result.withOPP.propManageTime).toEqual(9188)

    expect(result.totalSavings).toEqual(136219)
    expect(result.totalCostForOPP).toEqual(21000)
    expect(result.roi).toEqual(5.49)
  })

  it("it should calculate ROI with Pets", () => {
    const result = calculateROIWithPets({
      unitCount: 1000,
      avgRent: 1200,
      avgTenantLife: 18,
      unitPerPetRate: 0.75,

      petDamagePerIncidentRate: 760,
      unAuthPetFee: 300,
      petDeposit: 600,
      petRentPerMonth: 30,

      additionalTurnAroundTime: 2.5,
      propManagementWagePerHour: 50,
      fraudulentESAtoPetConversion: 0.7,
      petApprovalRate: 0.4,

      unAuthPetFeeRate: 0.03,
      petPerRental: 1.5,
      petDealTimeInHours: 0.5,
      ESABeforeOPPRate: 0.5,
    })

    expect(result.withoutOPP.yearlyDamage).toEqual(135000)
    expect(result.withoutOPP.petDeposit).toEqual(150000)
    expect(result.withoutOPP.unAuthPetFee).toEqual(6750)
    expect(result.withoutOPP.propManageTime).toEqual(46875)

    expect(result.withOPP.yearlyDamage).toEqual(229500)
    expect(result.withOPP.petDeposit).toEqual(307500)
    expect(result.withOPP.unAuthPetFee).toEqual(90000)
    expect(result.withOPP.propManageTime).toEqual(23438)

    expect(result.totalSavings).toEqual(358687)
    expect(result.totalCostForOPP).toEqual(60000)
    expect(result.roi).toEqual(4.98)
  })
})
