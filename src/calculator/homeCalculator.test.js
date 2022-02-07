const homeCalculateWithNoPets = require("./homeCalculatorWithNoPets")
const homeCalculateWithPets = require("./homeCalculatorWithPets")

describe("Testing home calculator ", () => {
  it("should calculate ROI without pets", () => {
    const result = homeCalculateWithNoPets({
      savingPerYear: 1000,
      ROI: 0.75,
    })

    expect(result.savingPerYear).toEqual(424500)
    expect(result.ROI).toEqual(607.5)
  })

  it("should calculate ROI with Pets", () => {
    const result = homeCalculateWithPets({
      savingPerYear: 1000,
      ROI: 0.75,
    })

    expect(result.withoutOPP.yearlyDamage).toEqual(381000)
    expect(result.withoutOPP.petDeposit).toEqual(535)
  })
})
