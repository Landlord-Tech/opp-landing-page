import React, { useReducer, useState } from "react"
import RangeInput from "./RangeInput"
import RangeInputLog from "./RangeInputLog"
import {
  homeCalculateWithNoPets,
  homeCalculateWithPets,
} from "../../calculator"
import { formatPrice } from "../utils"
import Link from "gatsby-link"

const initialState = {
  rentalUnitCount: 1000,
  unitPetRate: 75,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RENTAL_UNIT_COUNT": {
      return {
        ...state,
        rentalUnitCount: action.payload,
      }
    }
    case "SET_UNIT_PET_RATE": {
      return {
        ...state,
        unitPetRate: action.payload,
      }
    }
    default:
      return state
  }
}
const CalculatorSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [noPetsAllowed, setNoPetsAllowed] = useState(false)

  const { rentalUnitCount, unitPetRate } = state

  const noPetsResults = homeCalculateWithNoPets({
    ...state,
    unitPetRate: unitPetRate / 100,
  })

  const petsResults = homeCalculateWithPets({
    ...state,
    unitPetRate: unitPetRate / 100,
  })
  const { savingPerYear, ROI } = noPetsAllowed ? noPetsResults : petsResults

  function handleSwitchChange(e) {
    const { checked } = e.target
    setNoPetsAllowed(checked)
  }

  return (
    <div className="calculator-section">
      <div className="range-data">
        <h3 className="calculator-title h3 primary bold">Your data</h3>
        <div className="switch-wrapper">
          <strong>Pets allowed</strong>
          <label className="switch">
            <input
              type="checkbox"
              checked={noPetsAllowed}
              onChange={handleSwitchChange}
            />
            <span className="slider" />
          </label>
          <strong>Pets not allowed</strong>
        </div>

        <h5>Number of Rental Units</h5>
        <RangeInputLog
          inputValue={rentalUnitCount}
          min={1}
          max={100000}
          changeValue={number =>
            dispatch({
              type: "SET_RENTAL_UNIT_COUNT",
              payload: number,
            })
          }
        />

        <h5>
          Units with Pets (or ESA's) (%){" "}
          <span className="color-primary">National Average 75-90%</span>
        </h5>
        <RangeInput
          inputValue={unitPetRate}
          min={0}
          max={100}
          changeValue={number =>
            dispatch({
              type: "SET_UNIT_PET_RATE",
              payload: number,
            })
          }
        />
      </div>

      <div className="ribbon">
        <h3 className="h3 primary bold">Your results</h3>
        <p className="fw-bold">Savings Per Year</p>
        <h3 className="h3 primary bold">{formatPrice(savingPerYear, true)}</h3>
        <p className="fw-bold">ROI (%)</p>
        <h3 className="h3 primary bold">{ROI || 0}%</h3>
        <Link
          to={`${
            noPetsAllowed
              ? "/calculator-no-pets-allowed"
              : "/calculator-pets-allowed"
          }`}
          className="btn btn-sm secondary"
        >
          Open advanced calculator
        </Link>
      </div>
    </div>
  )
}

export default CalculatorSection
