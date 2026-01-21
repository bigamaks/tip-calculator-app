import React from 'react'

const Reset = ({onReset}) => {
  return (
    <button className="reset-btn" onClick={onReset} disabled={!onReset}>
      Reset
    </button>
  )
}

export default Reset
