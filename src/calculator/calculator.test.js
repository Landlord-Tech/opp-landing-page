const calculateROINoPets = require("./calculator");

describe("Testing calculator ", () => {
    it("should calculate correctly", () => {

        const result = calculateROINoPets({
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
            damageDealTimeInHours: 2
        });

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

})