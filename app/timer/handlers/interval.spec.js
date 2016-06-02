import expect               from 'expect'
import * as IntervalHandler from './interval'
import * as TimerConstants  from './../timer/constants'

describe('app/timer/handlers/interval', () => {
  describe('isRunning', () => {
    it('should return true if pass store with status RUNNING and interval is null', () => {
      const store = {
        getState: () => { return { status: TimerConstants.STATUS_RUNNING } }
      }
      expect(
        IntervalHandler.isRunning(store)
      ).toBeTruthy()
    })
    it('should return false if pass store with status STOPPED and interval is null', () => {
      const store = {
        getState: () => { return { status: TimerConstants.STATUS_STOPPED } }
      }
      expect(
        IntervalHandler.isRunning(store)
      ).toBeFalsy()
    })
  })

  describe('isStopped', () => {
    it('should return false if pass store with status RUNNING and interval is null', () => {
      const store = {
        getState: () => { return { status: TimerConstants.STATUS_RUNNING } }
      }
      expect(
        IntervalHandler.isStopped(store)
      ).toBeFalsy()
    })
    it('should return true if pass store with status STOPPED and interval is not null', () => {
      IntervalHandler.putInterval(setInterval(() => {}, 1000))
      const store = {
        getState: () => { return { status: TimerConstants.STATUS_STOPPED } }
      }
      expect(
        IntervalHandler.isStopped(store)
      ).toBeTruthy()
    })
  })

  describe('isFinished', () => {
    it('should return false if pass store with duration 1 and interval is null', () => {
      const store = {
        getState: () => { return { duration: 1 } }
      }
      expect(
        IntervalHandler.isFinished(store)
      ).toBeFalsy()
    })
    it('should return false if pass store with duration 1 and interval is not null', () => {
      IntervalHandler.putInterval(setInterval(() => {}, 1000))
      const store = {
        getState: () => { return { duration: 1 } }
      }
      expect(
        IntervalHandler.isFinished(store)
      ).toBeFalsy()
    })
    it('should return false if pass store with duration 0 and interval is null', () => {
      IntervalHandler.putInterval(null)
      const store = {
        getState: () => { return { duration: 0 } }
      }
      expect(
        IntervalHandler.isFinished(store)
      ).toBeFalsy()
    })
    it('should return true if pass store with duration 0 and interval is not null', () => {
      IntervalHandler.putInterval(setInterval(() => {}, 1000))
      const store = {
        getState: () => { return { duration: 0 } }
      }
      expect(
        IntervalHandler.isFinished(store)
      ).toBeTruthy()
    })
  })
})
