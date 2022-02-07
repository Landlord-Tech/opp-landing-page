import React from "react"
import Slider, { Handle } from "rc-slider"
import Log from "./log"

const RangeInput = ({ inputValue, changeValue, max, min }) => {
  const handle = ({ value, dragging, index, ...restProps }) => (
    <Handle value={inputValue} {...restProps} />
  )

  const logSlider = new Log({
    minpos: 0,
    maxpos: 100,
    minval: min,
    maxval: max,
  })

  function handleChange(e) {
    const { value } = e.target
    if ((+value <= max && +value >= min) || value === "") {
      changeValue(+value || "")
    }
  }

  function handleBlur(e) {
    const { value } = e.target

    if (value === "") {
      changeValue(min)
    }
  }

  function handleSliderChange(number) {
    const val = logSlider.value(number)
    changeValue(Math.round(val))
  }

  function sliderValue() {
    if (inputValue === 0) return 0
    const val = logSlider.position(inputValue)
    if (val > 1000) return Math.round(val / 100) * 100
    if (val > 500) return Math.round(val / 10) * 10
    return Math.round(val)
  }

  return (
    <div className="rangeInput-wrapper">
      <div className="rangeInput-top">
        <span className="rangeInput-number">{min}</span>
        <input
          max={max}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <Slider
        className="range-input"
        min={min}
        max={100}
        value={sliderValue()}
        handle={handle}
        onChange={e => handleSliderChange(e)}
      />
    </div>
  )
}

export default RangeInput
