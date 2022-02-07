import React from "react"

export function hashToId(hash) {
  return hash.substring(1)
}

export function formatPrice(x, black) {
  const isNegative = x < 0
  const isPositive = x > 0
  const formattedSigns = "$" + Math.abs(x.toFixed(0))
  const formattedPrice = formattedSigns
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  if (formattedPrice !== "NaN") {
    return (
      <>
        {isNegative ? (
          <>
            <span className={`${!black ? "negative-sign" : ""}`}>-</span>
            {formattedPrice}
          </>
        ) : isPositive ? (
          <>
            <span className={`${!black ? "positive-sign" : ""}`}>+</span>
            {formattedPrice}
          </>
        ) : (
          <>{formattedPrice}</>
        )}
      </>
    )
  } else {
    return 0
  }
}
