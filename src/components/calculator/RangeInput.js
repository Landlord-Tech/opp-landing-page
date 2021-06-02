import React, { useState } from "react"
import Slider, { Handle, SliderTooltip } from "rc-slider"

const RangeInput = ({inputValue, changeValue, max, logarithmic}) => {

  const handle = ({ value, dragging, index, ...restProps }) => <Handle value={inputValue} {...restProps} />

  function handleChange(e) {
    const { value } = e.target
    if (+value <= 20 && +value >= max) {
      changeValue(+value)
    }
  }

  function handleSliderChange(number) {
    if (!logarithmic) {
      changeValue(number)
    }
    if (number < max/8) {
      changeValue((number*5)/12500)
      return
    }
    if (number < max/4) {
      changeValue((number*100)/25000)
      return
    }
    if (number < max/20) {
      changeValue(number/20)
      return
    }
    if (number < max/10) {
      changeValue(number/10)
      return
    }
    if (number < max/5) {
      changeValue(number/5)
      return
    }
    if (number < max/2) {
      changeValue(number/2)
      return
    }
    changeValue(number)
  }

  function sliderValue() {
    console.log(inputValue)
    if (!logarithmic) {
      return inputValue
    }
    if (inputValue < 5) {
      return inputValue * 12500/5
    }
    if (inputValue < 100) {
      return inputValue * 25000/100
    }
    if (inputValue < max/100) {
      return inputValue * 10
    }
    if (inputValue < max/25) {
      return inputValue * 5
    }
    if (inputValue < max/4) {
      return inputValue * 2
    }
    return inputValue
  }

  return (
    <div className="rangeInput-wrapper">
      <div className="rangeInput-top">
        <span className="rangeInput-number">0</span>
        <input max={max} type="number" value={inputValue} onChange={handleChange} />
      </div>
      <Slider
        className="range-input"
        min={0}
        max={max}
        value={sliderValue()}
        handle={handle}
        onChange={(e) => handleSliderChange( e )}
      />
    </div>
  )
}

export default RangeInput
