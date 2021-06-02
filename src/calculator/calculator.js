const calculateROINoPets = ({
                       unitCount,
                       avgRent,
                       avgTenantLife,
                       unitPerPetRate,

                       petDamagePerTenantRate,
                       unAuthPetFee,
                       petDeposit,
                       petRentPerMonth,

                       additionalTurnAroundTime,
                       propManagementWagePerHour,
                       petReductionRate,
                       petApprovalRate,

                       unAuthPetFeeRate,
                       petDamageRate,
                       petDealTimeInHours,
                       damageDealTimeInHours
                   }) => {
    const yearlyDamageWithoutOPP = Math.round(unitCount * unitPerPetRate * petDamagePerTenantRate  * petDamageRate * (12 / avgTenantLife))
    const yearlyDamageWithOPP = Math.round(yearlyDamageWithoutOPP * petReductionRate)

    const yearlyLostRentPerYearWithoutOPP = Math.round(avgRent * (additionalTurnAroundTime / 4) * unitCount * unitPerPetRate * petDamageRate * (12 / avgTenantLife))
    const yearlyLostRentPerYearWithOPP = Math.round(yearlyLostRentPerYearWithoutOPP * petReductionRate)

    const unAuthPetFeeWithoutOPP = Math.round(unitCount * unitPerPetRate * unAuthPetFee * unAuthPetFeeRate)
    const unAuthPetFeeWithOPP = Math.round(unitCount * unitPerPetRate * unAuthPetFee * petApprovalRate)

    const propManageTimeWithoutOPP = Math.round((unitCount * unitPerPetRate * propManagementWagePerHour * petDealTimeInHours) +
                                     (unitCount * unitPerPetRate * propManagementWagePerHour * petDamageRate * damageDealTimeInHours))
    const propManageTimeWithOPP = Math.round((propManageTimeWithoutOPP * petReductionRate) -
                                  (0.5 * propManagementWagePerHour * unitCount * unitPerPetRate * petDealTimeInHours))


    const totalSavings =        - yearlyDamageWithOPP +
                        yearlyLostRentPerYearWithoutOPP - yearlyLostRentPerYearWithOPP +
                        unAuthPetFeeWithOPP - unAuthPetFeeWithoutOPP +
                        propManageTimeWithoutOPP - propManageTimeWithOPP
    const totalCostForOPP = unitCount * 5 * 12
    const roi = Math.round((totalSavings - totalCostForOPP) / totalCostForOPP  * 100) / 100

    return {
        withoutOPP: {
            yearlyDamage: yearlyDamageWithoutOPP,
            yearlyLostRent: yearlyLostRentPerYearWithoutOPP,
            unAuthPetFee: unAuthPetFeeWithoutOPP,
            propManageTime:propManageTimeWithoutOPP,
        },
        withOPP: {
            yearlyDamage: yearlyDamageWithOPP,
            yearlyLostRent: yearlyLostRentPerYearWithOPP,
            unAuthPetFee: unAuthPetFeeWithOPP,
            propManageTime: propManageTimeWithOPP
        },
        totalSavings,
        totalCostForOPP,
        roi
    }
}


module.exports = calculateROINoPets;