import React from 'react'

const DisplayBill = ({bill, totalTip}) => {
  return (
      <div className="result">
      Your pay ${bill + totalTip} (${bill} + ${totalTip} tip)
    </div>
  )
}

export default DisplayBill
