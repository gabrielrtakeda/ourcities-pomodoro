import React from 'react'

export const DurationOptions = ({
  state,
  pomodoro,
  shortBreak,
  longBreak
}) => (
  <div>
    <button
      onClick={pomodoro}
      style={{color: getActiveColor(state, 'POMODORO')}}
    >
      Pomodoro
    </button>

    <button
      onClick={shortBreak}
      style={{color: getActiveColor(state, 'SHORT_BREAK')}}
    >
      Short Break
    </button>

    <button
      onClick={longBreak}
      style={{color: getActiveColor(state, 'LONG_BREAK')}}
    >
      Long Break
    </button>

  </div>
)

DurationOptions.propTypes = {
  state      : React.PropTypes.object.isRequired,
  pomodoro   : React.PropTypes.func.isRequired,
  shortBreak : React.PropTypes.func.isRequired,
  longBreak  : React.PropTypes.func.isRequired
}

const getActiveColor = (state, current) => {
  return state.durationOption === current ? 'red' : 'inherit'
}
