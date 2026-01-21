// import React, { useState } from 'react'
import "../App.css"

const BillInput = ({bill, setBill}) => {


  return (
       <div className="form-group">
      <label>How much is the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  )
}

export default BillInput
