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
      style={getActiveColor(state, 'POMODORO')}
    >
      Pomodoro
    </button>

    <button
      onClick={shortBreak}
      style={getActiveColor(state, 'SHORT_BREAK')}
    >
      Short Break
    </button>

    <button
      onClick={longBreak}
      style={getActiveColor(state, 'LONG_BREAK')}
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
  return { color: state.durationOption === current ? 'green' : 'inherit' }
}
