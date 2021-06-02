import React, { useEffect, useReducer, useState, useRef } from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import CalculatorSidebar from "../components/calculator/CalculatorSidebar"
import RangeInput from "../components/calculator/RangeInput"
import RangeInputLog from "../components/calculator/RangeInputLog"
import FixedRibbon from "../components/calculator/FixedRibbon"
import Table from "../components/calculator/Table"

const initialState = {
  unitNumber: 0,
  monthlyRent: 0,
  estimatedPercent: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MONTHLY_RENT": {
      return {
        ...state,
        monthlyRent: action.payload,
      }
    }
    case "SET_ESTIMATED_PERCENT": {
      return {
        ...state,
        estimatedPercent: action.payload,
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
      console.log(refMapping[scrollTo].current)
      refMapping[scrollTo].current?.scrollIntoView({
        behavior: "smooth",
        // block: "nearest",
        // inline: "start",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  function handleLinkClick(to) {
    console.log(to)
    setScrollTo(to)
  }

  const { unitNumber, monthlyRent, estimatedPercent } = state

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
                      inputValue={monthlyRent}
                      changeValue={number =>
                        dispatch({
                          type: "SET_MONTHLY_RENT",
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
                    <h5>Estimated percentage of units with Pets</h5>
                    <p>
                      (What percentage of units would you estimate have animals
                      in them?)
                    </p>
                    <RangeInput
                      inputValue={estimatedPercent}
                      changeValue={number =>
                        dispatch({
                          type: "SET_ESTIMATED_PERCENT",
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
                      inputValue={monthlyRent}
                      changeValue={number =>
                        dispatch({
                          type: "SET_MONTHLY_RENT",
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
                      inputValue={monthlyRent}
                      changeValue={number =>
                        dispatch({
                          type: "SET_MONTHLY_RENT",
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
              <li id="lost-rent" className="calculator-list-item" ref={lostRef}>
                <h4 className="h4">Lost Rent</h4>
                <div className="calculator-item-content">
                  <div className="left">
                    <h5>How many Units</h5>
                    <p>(How many residential rental units do you have?)</p>
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
                    <h5>How many Units</h5>
                    <p>(How many residential rental units do you have?)</p>
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
                    <h5>How many Units</h5>
                    <p>(How many residential rental units do you have?)</p>
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
                <h4 className="h4">Summery</h4>
                <div className="calculator-item-table-content">
                  <div className="left">
                    <p>
                      Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                    </p>
                    <Table />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <FixedRibbon />
        </div>
      </div>
    </Layout>
  )
}

export default Calculator
