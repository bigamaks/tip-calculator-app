// import React, { Children, useState } from 'react'

const SelectPercentage = ({children, percentage, onSelect}) => {
    // const [percentage, setPercentage] = useState('0')
  return (
        <div className="form-group">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}

export default SelectPercentage
