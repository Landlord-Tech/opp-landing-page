import React, { useEffect, useReducer, useState, useRef } from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import CalculatorSidebar from "../components/calculator/CalculatorSidebar"
import RangeInput from "../components/calculator/RangeInput"
import RangeInputLog from "../components/calculator/RangeInputLog"
import FixedRibbon from "../components/calculator/FixedRibbon"
import NoAllowedTable from "../components/calculator/NoAllowedTable"
import { calculateROIWithNoPets } from "../calculator"
import RotatedView from "../components/rotatedView"
import { graphql, useStaticQuery } from "gatsby"

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
  const { search } = useLocation()
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

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "withNoPetCalculator"}}) {
        html
        frontmatter {
          title
          heroHeading,
          sec1Heading
          sec1SubHeading1
          sec1Text1
          sec1SubHeading2
          sec1Text2
          sec1Desc
          sec2Heading
          sec2SubHeading1
          sec2Text1
          sec2SubHeading2
          sec2Text2
          sec2SubHeading3
          sec2Text3
          sec2Desc
          sec3Heading
          sec3SubHeading1
          sec3Text1
          sec3SubHeading2
          sec3Text2
          sec3SubHeading3
          sec3Text3
          sec3Desc
          sec4Heading
          sec4SubHeading1
          sec4Text1
          sec4SubHeading2
          sec4Text2
          sec4SubHeading3
          sec4Text3
          sec4Desc
          sec5Heading
          sec5SubHeading1
          sec5Text1
          sec5SubHeading2
          sec5Text2
          sec5SubHeading3
          sec5Text3
          sec5Desc
          sec6Heading
          sec6Desc
        }
      }
    }
  `)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    heroHeading,
    sec1Heading,
    sec1SubHeading1,
    sec1Text1,
    sec1SubHeading2,
    sec1Text2,
    sec1Desc,
    sec2Heading,
    sec2SubHeading1,
    sec2Text1,
    sec2SubHeading2,
    sec2Text2,
    sec2SubHeading3,
    sec2Text3,
    sec2Desc,
    sec3Heading,
    sec3SubHeading1,
    sec3Text1,
    sec3SubHeading2,
    sec3Text2,
    sec3SubHeading3,
    sec3Text3,
    sec3Desc,
    sec4Heading,
    sec4SubHeading1,
    sec4Text1,
    sec4SubHeading2,
    sec4Text2,
    sec4SubHeading3,
    sec4Text3,
    sec4Desc,
    sec5Heading,
    sec5SubHeading1,
    sec5Text1,
    sec5SubHeading2,
    sec5Text2,
    sec5SubHeading3,
    sec5Text3,
    sec5Desc,
    sec6Heading,
    sec6Desc
  } = frontmatter

  console.log({ html })
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
    damageDealTimeInHours,
  } = state

  const ROINoPetsResults = calculateROIWithNoPets({
    ...state,
    unitPerPetRate: unitPerPetRate / 100,
    petReductionRate: petReductionRate / 100,
    petApprovalRate: petApprovalRate / 100,
    unAuthPetFeeRate: unAuthPetFeeRate / 100,
    petDamageRate: petDamageRate / 100,
  })

  const { totalSavings, totalCostForOPP, roi } = ROINoPetsResults

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
    <Layout className="calculator-page" prodHeader>
      <div className="container fluid">
        <h1 className="h3">Advanced ROI Calculator</h1>
        <div className="calculator-content">
          <CalculatorSidebar
            search={search}
            activeItem={activeItem}
            handleLinkClick={handleLinkClick}
            prodSidebar
          />

          <div className="calculator-main">
            <h2 className="h3 calculator-main-title">{heroHeading}</h2>

            <ul className="calculator-list">
              <li
                id="calculator-introduction"
                className="calculator-list-item"
                ref={introductionRef}
              >
                <h4 className="h4">{sec1Heading}</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>{sec1SubHeading1}</h5>
                    <p>{sec1Text1}</p>
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
                    <h5>{sec1SubHeading2}</h5>
                    <p>{sec1Text2}</p>
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
                    <p>{sec1Desc}</p>
                  </div>
                </div>
              </li>
              <li
                id="cost-pet-damage"
                className="calculator-list-item"
                ref={damageRef}
              >
                <h4 className="h4">{sec2Heading}</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>{sec2SubHeading1}</h5>
                    <p>{sec2Text1}</p>
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
                    <h5>{sec2SubHeading2}</h5>
                    <p>{sec2Text2}</p>
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
                    <h5>{sec2SubHeading3}</h5>
                    <p>{sec2Text3}</p>
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
                      {sec2Desc}
                      <span className="section-links">
                        <a
                          href="https://www.american-apartment-owners-association.org/property-management/latest-news/what-90-of-renters-want/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          AAOA
                        </a>
                        <a
                          href="https://www.humanesociety.org/resources/increasing-housing-options-renters-pets#:~:text=Did%20you%20know%20that%2072,cats%20wind%20up%20in%20shelters%3F"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HSUS
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li id="lost-rent" className="calculator-list-item" ref={lostRef}>
                <h4 className="h4">{sec3Heading}</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>{sec3SubHeading1}</h5>
                    <p>{sec3Text1}</p>
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
                    <h5>{sec3SubHeading2}</h5>
                    <p>{sec3Text2}</p>
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
                    <h5>{sec3SubHeading3}</h5>
                    <p>{sec3Text3}</p>
                    <RangeInput
                      inputValue={avgTenantLife}
                      min={1}
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
                    <p>{sec3Desc}</p>
                  </div>
                </div>
              </li>
              <li
                id="fees-and-fines"
                className="calculator-list-item"
                ref={feesRef}
              >
                <h4 className="h4">{sec4Heading}</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>{sec4SubHeading1}</h5>
                    <p>{sec4Text1}</p>
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
                    <h5>{sec4SubHeading2}</h5>
                    <p>{sec4Text2}</p>
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
                    <h5>{sec4SubHeading3}</h5>
                    <p>{sec4Text3}</p>
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
                    <p>{sec4Desc}</p>
                  </div>
                </div>
              </li>
              <li
                id="time-savings"
                className="calculator-list-item"
                ref={timeRef}
              >
                <h4 className="h4">{sec5Heading}</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>{sec5SubHeading1}</h5>
                    <p>{sec5Text1}</p>
                    <RangeInput
                      inputValue={petDealTimeInHours}
                      min={0}
                      max={5}
                      step={0.1}
                      changeValue={number =>
                        dispatch({
                          type: "SET_PET_DEAL_TIME_IN_HOURS",
                          payload: number,
                        })
                      }
                    />
                    <h5>{sec5SubHeading2}</h5>
                    <p>{sec5Text2}</p>
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
                    <h5>{sec5SubHeading3}</h5>
                    <p>{sec5Text3}</p>
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
                    <p>{sec5Desc}</p>
                  </div>
                </div>
              </li>
              <li
                id="summary"
                className="calculator-list-item"
                ref={summaryRef}
              >
                <h4 className="h4">{sec6Heading}</h4>
                <div className="calculator-item-table-content">
                  <div className="left">
                    <p>{sec6Desc}</p>
                    <NoAllowedTable data={ROINoPetsResults} />
                  </div>
                </div>
              </li>
              <li>
                <FixedRibbon className='show-mobile' saving={totalSavings} ROI={roi} OPP={totalCostForOPP} />
              </li>
            </ul>
          </div>

          <FixedRibbon className='hide-mobile' saving={totalSavings} ROI={roi} OPP={totalCostForOPP} />
        </div>
      </div>
      <RotatedView />
    </Layout>
  )
}

export default Calculator
