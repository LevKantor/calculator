import React from 'react'

function Output({ outputValue, history }) {
  return (
    <div className="output">
      <div className="output-operation">
        <p>{history}</p>
      </div>
      <div className="output-value">
        <p>{outputValue}</p>
      </div>
    </div>
  )
}
export default Output
