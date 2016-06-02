import React from 'react'

export const ActionButtons = ({
  start,
  stop,
  reset
}) => (
  <div>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
  </div>
)

ActionButtons.propTypes = {
  start : React.PropTypes.func.isRequired,
  stop  : React.PropTypes.func.isRequired,
  reset : React.PropTypes.func.isRequired,
}
