import React from "react"
import Slider, { Handle, SliderTooltip } from "rc-slider"

const RangeInput = ({ inputValue, changeValue, min, max, step }) => {
  const handle = ({ value, dragging, index, ...restProps }) => (
    <Handle value={inputValue} {...restProps} />
  )

  function handleChange(e) {
    const { value } = e.target
    if ((+value <= max && +value >= min) || value === "") {
      changeValue(+value || "")
    }
  }

  function handleSliderChange(number) {
    changeValue(number)
  }

  return (
    <div className="rangeInput-wrapper">
      <div className="rangeInput-top">
        <span className="rangeInput-number">{min}</span>
        <input
          max={max}
          min={min}
          step={step}
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Slider
        className="range-input"
        min={min}
        max={max}
        value={inputValue}
        handle={handle}
        onChange={e => handleSliderChange(e)}
        step={step}
      />
    </div>
  )
}

export default RangeInput