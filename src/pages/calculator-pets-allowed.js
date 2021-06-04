import React, { useEffect, useReducer, useState, useRef } from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import CalculatorSidebar from "../components/calculator/CalculatorSidebar"
import RangeInput from "../components/calculator/RangeInput"
import RangeInputLog from "../components/calculator/RangeInputLog"
import FixedRibbon from "../components/calculator/FixedRibbon"
import NoAllowedTable from "../components/calculator/NoAllowedTable"
import { calculateROIWithPets } from "../calculator"
import AllowedTable from "../components/calculator/AllowedTable"

const initialState = {
  unitCount: 1000,
  unitPerPetRate: 75,
  unAuthPetFee: 300,
  petDeposit: 600,
  petRentPerMonth: 30,
  propManagementWagePerHour: 50,
  fraudulentESAtoPetConversion: 70,
  petApprovalRate: 40,
  unAuthPetFeeRate: 3,
  petPerRental: 1.5,
  petDealTimeInHours: 0.5,
  ESABeforeOPPRate: 50,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_UNIT_COUNT": {
      return {
        ...state,
        unitCount: action.payload,
      }
    }
    case "SET_AVG_TENANT_LIFE": {
      return {
        ...state,
        avgTenantLife: action.payload,
      }
    }
    case "SET_UNIT_PER_PET_RATE": {
      return {
        ...state,
        unitPerPetRate: action.payload,
      }
    }
    case "SET_PET_DEPOSIT": {
      return {
        ...state,
        petDeposit: action.payload,
      }
    }
    case "SET_PET_RENT_PER_MONTH": {
      return {
        ...state,
        petRentPerMonth: action.payload,
      }
    }
    case "SET_FRAUDULENT_ESA_TO_PET_CONVERSION": {
      return {
        ...state,
        fraudulentESAtoPetConversion: action.payload,
      }
    }
    case "SET_PET_PER_RENTAL": {
      return {
        ...state,
        petPerRental: action.payload,
      }
    }
    case "SET_ESA_BEFORE_OPP_RATE": {
      return {
        ...state,
        ESABeforeOPPRate: action.payload,
      }
    }
    case "SET_PET_DAMAGE_PER_TENANT": {
      return {
        ...state,
        petDamagePerTenant: action.payload,
      }
    }
    case "SET_UN_AUTH_PET_FEE": {
      return {
        ...state,
        unAuthPetFee: action.payload,
      }
    }
    case "SET_ADDITIONAL_TURN_AROUND_TIME": {
      return {
        ...state,
        additionalTurnAroundTime: action.payload,
      }
    }
    case "SET_PROP_MANAGEMENT_WAGE_PER_HOUR": {
      return {
        ...state,
        propManagementWagePerHour: action.payload,
      }
    }
    case "SET_PET_REDUCTION_RATE": {
      return {
        ...state,
        petReductionRate: action.payload,
      }
    }
    case "SET_PET_APPROVAL_RATE": {
      return {
        ...state,
        petApprovalRate: action.payload,
      }
    }
    case "SET_UN_AUTH_PET_FEE_RATE": {
      return {
        ...state,
        unAuthPetFeeRate: action.payload,
      }
    }
    case "SET_PET_DAMAGE_RATE": {
      return {
        ...state,
        petDamageRate: action.payload,
      }
    }
    case "SET_PET_DEAL_TIME_IN_HOURS": {
      return {
        ...state,
        petDealTimeInHours: action.payload,
      }
    }
    case "SET_DAMAGE_DEAL_TIME_IN_HOURS": {
      return {
        ...state,
        damageDealTimeInHours: action.payload,
      }
    }

    default:
      return state
  }
}

const Calculator = () => {
  const { search, hash } = useLocation()
  const [activeItem, setActiveItem] = useState(null)
  const [scrollTo, setScrollTo] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState)
  const introductionRef = React.useRef(null)
  const petRentRef = React.useRef(null)
  const petDepositRef = React.useRef(null)
  const feesRef = React.useRef(null)
  const timeRef = React.useRef(null)
  const summaryRef = React.useRef(null)

  const refMapping = {
    "Calculator introduction": introductionRef,
    "Pet rent": petRentRef,
    "Pet deposits": petDepositRef,
    "Fees and fines": feesRef,
    "Time savings": timeRef,
    Summary: summaryRef,
  }

  React.useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo].current?.scrollIntoView({
        behavior: "smooth",
        // block: "nearest",
        // inline: "start",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  function handleLinkClick(to) {
    setScrollTo(to)
  }

  const {
    unitCount,
    unitPerPetRate,

    unAuthPetFee,
    petDeposit,
    petRentPerMonth,
    propManagementWagePerHour,
    fraudulentESAtoPetConversion,
    petApprovalRate,

    unAuthPetFeeRate,
    petPerRental,
    petDealTimeInHours,
    ESABeforeOPPRate,
  } = state

  const ROIPetsResults = calculateROIWithPets({
    ...state,
    unitPerPetRate: unitPerPetRate / 100,
    petApprovalRate: petApprovalRate / 100,
    unAuthPetFeeRate: unAuthPetFeeRate / 100,
    fraudulentESAtoPetConversion: fraudulentESAtoPetConversion / 100,
    ESABeforeOPPRate: ESABeforeOPPRate / 100,
  })

  const { totalSavings, totalCostForOPP, roi } = ROIPetsResults

  useEffect(() => {
    const listItems = document.querySelectorAll(".calculator-list-item")
    const options = {
      threshold: 0.3,
    }
    let observer = new IntersectionObserver(handleObserve, options)
    listItems.forEach(item => {
      observer.observe(item)
    })
  }, [])

  function handleObserve(e) {
    let { isIntersecting } = e[0]
    let { id } = e[0].target
    if (isIntersecting) {
      setActiveItem(id)
    }
  }

  return (
    <Layout className="calculator-page">
      <div className="container">
        <h1 className="h2">Advanced ROI Calculator</h1>
        <div className="calculator-content">
          <CalculatorSidebar
            search={search}
            activeItem={activeItem}
            handleLinkClick={handleLinkClick}
            active={"allowed"}
          />

          <div className="calculator-main">
            <h2 className="h3 calculator-main-title">
              Return on Investment with OurPetPolicy
            </h2>

            <ul className="calculator-list">
              <li
                id="calculator-introduction"
                className="calculator-list-item"
                ref={introductionRef}
              >
                <h4 className="h4">Tell us about your Properties</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>How many Units</h5>
                    <p>(How many residential rental units do you have?)</p>
                    <RangeInputLog
                      inputValue={unitCount}
                      min={1}
                      max={100000}
                      changeValue={number =>
                        dispatch({
                          type: "SET_UNIT_COUNT",
                          payload: number,
                        })
                      }
                    />
                    {/*<h5>What is your Average Monthly Rent</h5>
                    <p>(Out of all of your rentals, what is the average of the monthly rent)</p>
                    <RangeInput
                      inputValue={avgRent}
                      min={0}
                      max={4000}
                      changeValue={number =>
                        dispatch({
                          type: "SET_AVG_RENT",
                          payload: number,
                        })
                      }
                    />*/}
                  </div>
                  <div className="right">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctus
                      non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      Mauris ipsum. Nulla metus metus, ullamcorper vel,
                      tincidunt sed, euismod in, nibh. Quisque volutpat
                      condimentum velit.
                    </p>
                  </div>
                </div>
              </li>
              <li
                id="cost-pet-damage"
                className="calculator-list-item"
                ref={petRentRef}
              >
                <h4 className="h4">Pet Rent</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Pet rent per month</h5>
                    <p>
                      (How much do you charge, on average, per pet per month?)
                    </p>
                    <RangeInput
                      inputValue={petRentPerMonth}
                      min={0}
                      max={125}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_RENT_PER_MONTH",
                          payload: number,
                        })
                      }
                    />
                    {/*<h5>Percentage of tenants with an animal</h5>
                    <p>(What percentage of your tenants have pets, ESA’s, or service animals?)</p>
                    <RangeInput
                      inputValue={petDamageRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_DAMAGE_RATE",
                          payload: number,
                        })
                      }
                    />*/}
                    <h5>ESA’s percentage before OurPetPolicy</h5>
                    <p>
                      (How much does it cost to fix damage from an animal, when
                      there is damage after a tenant leaves?)
                    </p>
                    <RangeInput
                      inputValue={ESABeforeOPPRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_ESA_BEFORE_OPP_RATE",
                          payload: number,
                        })
                      }
                    />
                    <h5>Fraudulent ESA to Pet percentage</h5>
                    <p>
                      (The percentage of ESA’s that are fraudulent and get
                      turned into paying pet rent, typically 50-70%)
                    </p>
                    <RangeInput
                      inputValue={fraudulentESAtoPetConversion}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_FRAUDULENT_ESA_TO_PET_CONVERSION",
                          payload: number,
                        })
                      }
                    />
                  </div>
                  <div className="right">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctus
                      non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      Mauris ipsum. Nulla metus metus, ullamcorper vel,
                      tincidunt sed, euismod in, nibh. Quisque volutpat
                      condimentum velit.
                    </p>
                  </div>
                </div>
              </li>
              <li
                id="lost-rent"
                className="calculator-list-item"
                ref={petDepositRef}
              >
                <h4 className="h4">Pet Deposits</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Pet Deposit</h5>
                    <p>(How much do you charge for each pet deposit?)</p>
                    <RangeInput
                      inputValue={petDeposit}
                      min={0}
                      max={1200}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_DEPOSIT",
                          payload: number,
                        })
                      }
                    />
                    <h5>Average Pets per Rental</h5>
                    <p>
                      (For every unit that has a pet, what is the average number
                      of pets per unit?)
                    </p>
                    <RangeInput
                      inputValue={petPerRental}
                      min={0}
                      max={6}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_PER_RENTAL",
                          payload: number,
                        })
                      }
                    />
                  </div>
                  <div className="right">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctus
                      non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      Mauris ipsum. Nulla metus metus, ullamcorper vel,
                      tincidunt sed, euismod in, nibh. Quisque volutpat
                      condimentum velit.
                    </p>
                  </div>
                </div>
              </li>
              <li
                id="fees-and-fines"
                className="calculator-list-item"
                ref={feesRef}
              >
                <h4 className="h4">Fees and Fines</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Unauthorized Pet Fee</h5>
                    <p>
                      (How much would you like to charge tenants for an
                      unauthorized pet?)
                    </p>
                    <RangeInput
                      inputValue={unAuthPetFee}
                      min={0}
                      max={600}
                      changeValue={number =>
                        dispatch({
                          type: "SET_UN_AUTH_PET_FEE",
                          payload: number,
                        })
                      }
                    />
                    <h5>Percentage of unauthorized pet fees</h5>
                    <p>
                      (What percentage of tenants do you collect unauthorized
                      pet fees from?)
                    </p>
                    <RangeInput
                      inputValue={unAuthPetFeeRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_UN_AUTH_PET_FEE_RATE",
                          payload: number,
                        })
                      }
                    />
                    <h5>
                      Percentage of tenants that get an animal prior to approval
                    </h5>
                    <p>
                      (What percentage of tenants that get an animal, get one
                      before it has been approved?)
                    </p>
                    <RangeInput
                      inputValue={petApprovalRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_APPROVAL_RATE",
                          payload: number,
                        })
                      }
                    />
                  </div>
                  <div className="right">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctus
                      non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      Mauris ipsum. Nulla metus metus, ullamcorper vel,
                      tincidunt sed, euismod in, nibh. Quisque volutpat
                      condimentum velit.
                    </p>
                  </div>
                </div>
              </li>
              <li
                id="time-savings"
                className="calculator-list-item"
                ref={timeRef}
              >
                <h4 className="h4">Time Saving</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Time spent dealing with animals (in hours)</h5>
                    <p>
                      (How much time on average, per tenant that has an animal,
                      does property management spend giving instructions,
                      answering questions, etc.?)
                    </p>
                    <RangeInput
                      inputValue={petDealTimeInHours}
                      min={0}
                      max={5}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_DEAL_TIME_IN_HOURS",
                          payload: number,
                        })
                      }
                    />
                    <h5>Property Management wage (per hour)</h5>
                    <p>
                      (How much time, in dollars per hour, is the property
                      manager’s time spent dealing with pet questions and pet
                      damage?)
                    </p>
                    <RangeInput
                      inputValue={propManagementWagePerHour}
                      min={0}
                      max={120}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PROP_MANAGEMENT_WAGE_PER_HOUR",
                          payload: number,
                        })
                      }
                    />
                  </div>
                  <div className="right">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctus
                      non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      Mauris ipsum. Nulla metus metus, ullamcorper vel,
                      tincidunt sed, euismod in, nibh. Quisque volutpat
                      condimentum velit.
                    </p>
                  </div>
                </div>
              </li>
              <li
                id="summary"
                className="calculator-list-item"
                ref={summaryRef}
              >
                <h4 className="h4">Summary</h4>
                {/*<p>Our goal is to save you way more money </p>*/}
                <div className="calculator-item-table-content">
                  <div className="left">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                    </p>
                    <AllowedTable data={ROIPetsResults} />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <FixedRibbon saving={totalSavings} ROI={roi} OPP={totalCostForOPP} />
        </div>
      </div>
    </Layout>
  )
}

export default Calculator
