import React                  from 'react'
import * as DateFormatHandler from './../handlers/date-format'
import DurationOptions        from './../duration-options/duration-options'
import ActionButtons          from './../action-buttons/action-buttons'

export const Timer = ({ state }) => (
  <div>
    <DurationOptions.Component />
    <h1>{DateFormatHandler.mmss(state.duration)}</h1>
    <ActionButtons.Component />
  </div>
)

Timer.propTypes = {
  state : React.PropTypes.object.isRequired,
}
