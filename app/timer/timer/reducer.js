import * as TimeConstants            from './../constants/time'
import * as DurationOptionsConstants from './../duration-options/constants'
import * as TimerConstants           from './constants'

export const INITIAL_STATE = {
  status         : TimerConstants.STATUS_STOPPED,
  durationOption : DurationOptionsConstants.OPTION_POMODORO,
  duration       : DurationOptionsConstants.DURATION_POMODORO
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * Timer
     */
    case TimerConstants.ACTION_START:
      return { ...state, status: TimerConstants.STATUS_RUNNING }

    case TimerConstants.ACTION_STOP:
      return { ...state, status: TimerConstants.STATUS_STOPPED }

    case TimerConstants.ACTION_RESET:
      return INITIAL_STATE

    /**
     * Clock
     */
    case TimerConstants.ACTION_TICK:
      return {
        ...state,
        duration: state.duration - TimeConstants.SECOND
      }

    /**
     * Duration Options
     */
    case TimerConstants.ACTION_DURATION_POMODORO:
      return {
        ...state,
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_POMODORO,
        duration       : DurationOptionsConstants.DURATION_POMODORO
      }

    case TimerConstants.ACTION_DURATION_SHORT_BREAK:
      return {
        ...state,
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_SHORT_BREAK,
        duration       : DurationOptionsConstants.DURATION_SHORT_BREAK
      }

    case TimerConstants.ACTION_DURATION_LONG_BREAK:
      return {
        ...state,
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_LONG_BREAK,
        duration       : DurationOptionsConstants.DURATION_LONG_BREAK
      }

    default:
      return state
  }
}
