import React, { useEffect, useReducer, useState, useRef } from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import CalculatorSidebar from "../components/calculator/CalculatorSidebar"
import RangeInput from "../components/calculator/RangeInput"
import RangeInputLog from "../components/calculator/RangeInputLog"
import FixedRibbon from "../components/calculator/FixedRibbon"
import NoAllowedTable from "../components/calculator/NoAllowedTable"
import { calculateROIWithNoPets } from "../calculator"

const initialState = {
  unitCount: 350,
  avgRent: 1540,
  avgTenantLife: 18,
  unitPerPetRate: 70,
  petDamagePerTenant: 760,
  unAuthPetFee: 300,
  additionalTurnAroundTime: 2,
  propManagementWagePerHour: 50,
  petReductionRate: 50,
  petApprovalRate: 40,
  unAuthPetFeeRate: 3,
  petDamageRate: 75,
  petDealTimeInHours: 0.5,
  damageDealTimeInHours: 2,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_UNIT_COUNT": {
      return {
        ...state,
        unitCount: action.payload,
      }
    }
    case "SET_AVG_RENT": {
      return {
        ...state,
        avgRent: action.payload,
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
  const damageRef = React.useRef(null)
  const lostRef = React.useRef(null)
  const feesRef = React.useRef(null)
  const timeRef = React.useRef(null)
  const summaryRef = React.useRef(null)

  const refMapping = {
    "Calculator introduction": introductionRef,
    "Cost of pet damage": damageRef,
    "Lost rent": lostRef,
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
    avgRent,
    avgTenantLife,
    unitPerPetRate,
    petDamagePerTenant,
    unAuthPetFee,
    additionalTurnAroundTime,
    propManagementWagePerHour,
    petReductionRate,
    petApprovalRate,
    unAuthPetFeeRate,
    petDamageRate,
    petDealTimeInHours,
    damageDealTimeInHours
  } = state

  const ROINoPetsResults = calculateROIWithNoPets({
    ...state,
    unitPerPetRate: unitPerPetRate / 100,
    petReductionRate: petReductionRate / 100,
    petApprovalRate: petApprovalRate / 100,
    unAuthPetFeeRate: unAuthPetFeeRate / 100,
    petDamageRate: petDamageRate / 100,
  })

  const {totalSavings, totalCostForOPP, roi } = ROINoPetsResults

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
                    <h5>What is your Average Monthly Rent</h5>
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
                id="cost-pet-damage"
                className="calculator-list-item"
                ref={damageRef}
              >
                <h4 className="h4"> Cost of pet damage</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Estimated percentage of units with Pets (%)</h5>
                    <p>
                      (What percentage of units would you estimate have animals
                      in them?)
                    </p>
                    <RangeInput
                      inputValue={unitPerPetRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_UNIT_PER_PET_RATE",
                          payload: number,
                        })
                      }
                    />
                    <h5>Percentage of animals that cause damage (%)</h5>
                    <p>
                      (For every unit with an animal, what percentage of them
                      will have damage from the animal at the end of the lease)
                    </p>
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
                    />
                    <h5>Typical cost to fix damage from an animal</h5>
                    <p>
                      (how much does it cost to fix damage from an animal when
                      there is damage after a tenant leaves?)
                    </p>
                    <RangeInput
                      inputValue={petDamagePerTenant}
                      min={0}
                      max={2000}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_DAMAGE_PER_TENANT",
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
                ref={lostRef}
              >
                <h4 className="h4">Lost Rent</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>Additional turn-around time (weeks)</h5>
                    <p>(For an apartment that has pet damage, how much longer does it take to fix it up to be ready to rent again)</p>
                    <RangeInput
                      inputValue={additionalTurnAroundTime}
                      min={0}
                      max={8}
                      changeValue={number =>
                        dispatch({
                          type: "SET_ADDITIONAL_TURN_AROUND_TIME",
                          payload: number,
                        })
                      }
                    />
                    <h5>Animal reduction percentage from using OurPetPolicy</h5>
                    <p>(Typically 50-70% of ESA letters are fraudulent and will be exposed with OurPetPolicy)</p>
                    <RangeInput
                      inputValue={petReductionRate}
                      min={0}
                      max={100}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_REDUCTION_RATE",
                          payload: number,
                        })
                      }
                    />
                    <h5>Average Tenant Life in Months</h5>
                    <p>(On average, how many months do your tenants stay before moving)</p>
                    <RangeInput
                      inputValue={avgTenantLife}
                      min={0}
                      max={48}
                      changeValue={number =>
                        dispatch({
                          type: "SET_AVG_TENANT_LIFE",
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
                    <p>(How much will you charge when catching a tenant with an unauthorized pet?)</p>
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
                    <p>(What percentage of tenants do you collect unauthorized pet fees from?)</p>
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
                    <h5>Percentage of tenants that get an animal before approved</h5>
                    <p>(what percentage of tenants that get an animal actually get it before they have gotten it approved)</p>
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
                    <h5>Time to deal with animal (hours)</h5>
                    <p>(How much time on average per tenant that gets an animal does property management spend giving instructions, answering questions, etc)</p>
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
                    <h5>Time to deal with animal damage</h5>
                    <p>(How much time does it take on average to line up contractors etc to fix the animal damage and get ready to rent again?)</p>
                    <RangeInput
                      inputValue={damageDealTimeInHours}
                      min={0}
                      max={10}
                      changeValue={number =>
                        dispatch({
                          type: "SET_DAMAGE_DEAL_TIME_IN_HOURS",
                          payload: number,
                        })
                      }
                    />
                    <h5>Property Management wage (per hour)</h5>
                    <p>(what percentage of tenants that get an animal actually get it before they have gotten it approved)</p>
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
                    <NoAllowedTable data={ROINoPetsResults} />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <FixedRibbon
            saving={totalSavings}
            ROI={roi}
            OPP={totalCostForOPP}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Calculator
