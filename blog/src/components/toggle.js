import React from "react"

const Toggle = ({ checked, onChange }) => (
  <span>
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" className="focus:outline-none"/>
  </span >
)

export default Toggle
