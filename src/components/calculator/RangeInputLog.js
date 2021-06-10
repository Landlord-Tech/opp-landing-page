import React from "react"
import Slider, { Handle, SliderTooltip } from "rc-slider"
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

  const marks = {
    12: '5',
    25: '100',
    37: '250',
    50: '1000',
  }
  return (
    <div className="rangeInput-wrapper">
      <div className="rangeInput-top">
        <span className="rangeInput-number">1</span>
        <input
          max={max}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Slider
        className="range-input"
        min={min}
        max={100}
        // marks={marks}
        value={sliderValue()}
        handle={handle}
        onChange={e => handleSliderChange(e)}
      />
      
    </div>
  )
}

export default RangeInput