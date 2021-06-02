import React from "react"
import Slider, { Handle, SliderTooltip } from "rc-slider"

const RangeInput = ({ inputValue, changeValue, min, max }) => {
  const handle = ({ value, dragging, index, ...restProps }) => (
    <Handle value={inputValue} {...restProps} />
  )

  function handleChange(e) {
    const { value } = e.target
    if (+value <= max && +value >= min) {
      changeValue(+value)
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
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Slider
        className="range-input"
        min={0}
        max={max}
        value={inputValue}
        handle={handle}
        onChange={e => handleSliderChange(e)}
      />
    </div>
  )
}

export default RangeInput
