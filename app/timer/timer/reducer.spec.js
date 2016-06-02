import expect                        from 'expect'
import * as reducer                  from './reducer'
import * as DurationOptionsConstants from './../duration-options/constants'
import * as TimeConstants            from './../constants/time'
import * as TimerConstants           from './constants'

describe('app/timer/timer/reducer', () => {
  describe('initial state value', () => {
    it('should return an initial state object passing empty parameters', () => {
      expect(
        reducer.reducer(undefined, {})
      ).toEqual(reducer.INITIAL_STATE)
    })
  })

  describe('timer actions', () => {
    it('should return a state object with status RUNNING passing START action type', () => {
      expect(
        reducer.reducer(undefined, { type: TimerConstants.ACTION_START })
      ).toEqual({
        ...reducer.INITIAL_STATE,
        status: TimerConstants.STATUS_RUNNING
      })
    })
    it('should return a state object with status STOPPED passing STOP action type', () => {
      expect(
        reducer.reducer(undefined, { type: TimerConstants.ACTION_STOP })
      ).toEqual({
        ...reducer.INITIAL_STATE,
        status: TimerConstants.STATUS_STOPPED
      })
    })
    it('should return an initial state object passing RESET action type', () => {
      expect(
        reducer.reducer(undefined, { type: TimerConstants.ACTION_RESET })
      ).toEqual(reducer.INITIAL_STATE)
    })
  })

  describe('clock actions', () => {
    it('should return a state object with duration minus 1 second', () => {
      const beforeState = {
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_POMODORO,
        duration       : 60 * TimeConstants.MINUTE
      }
      const afterState = {
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_POMODORO,
        duration       : 59 * TimeConstants.MINUTE + 59 * TimeConstants.SECOND
      }
      expect(
        reducer.reducer(beforeState, { type: TimerConstants.ACTION_TICK })
      ).toEqual(afterState)
    })
  })

  describe('duration options actions', () => {
    it('should return a state object with POMODORO duration settings', () => {
      const beforeState = {
        status         : TimerConstants.STATUS_RUNNING,
        durationOption : DurationOptionsConstants.OPTION_LONG_BREAK,
        duration       : DurationOptionsConstants.DURATION_LONG_BREAK
      }
      const afterState = {
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_POMODORO,
        duration       : DurationOptionsConstants.DURATION_POMODORO
      }
      expect(
        reducer.reducer(beforeState, { type: TimerConstants.ACTION_DURATION_POMODORO })
      ).toEqual(afterState)
    })
    it('should return a state object with SHORT_BREAK duration settings', () => {
      const beforeState = {
        status         : TimerConstants.STATUS_RUNNING,
        durationOption : DurationOptionsConstants.OPTION_LONG_BREAK,
        duration       : DurationOptionsConstants.DURATION_LONG_BREAK
      }
      const afterState = {
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_SHORT_BREAK,
        duration       : DurationOptionsConstants.DURATION_SHORT_BREAK
      }
      expect(
        reducer.reducer(beforeState, { type: TimerConstants.ACTION_DURATION_SHORT_BREAK })
      ).toEqual(afterState)
    })
    it('should return a state object with LONG_BREAK duration settings', () => {
      const beforeState = {
        status         : TimerConstants.STATUS_RUNNING,
        durationOption : DurationOptionsConstants.OPTION_SHORT_BREAK,
        duration       : DurationOptionsConstants.DURATION_SHORT_BREAK
      }
      const afterState = {
        status         : TimerConstants.STATUS_STOPPED,
        durationOption : DurationOptionsConstants.OPTION_LONG_BREAK,
        duration       : DurationOptionsConstants.DURATION_LONG_BREAK
      }
      expect(
        reducer.reducer(beforeState, { type: TimerConstants.ACTION_DURATION_LONG_BREAK })
      ).toEqual(afterState)
    })
  })
})
