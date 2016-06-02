import * as TimeConstants  from './../constants/time'
import * as TimerConstants from './../timer/constants'

/**
 * TODO: Procurar forma mais elegante implementar esse comportamento.
 */
let interval = null;

export const putInterval = (intervalObject) => {
  interval = intervalObject
}

export const takeInterval = () => {
  return interval
}

export const isRunning = (store) => {
  return interval === null
    && store.getState().status === TimerConstants.STATUS_RUNNING
}

export const isStopped = (store) => {
  return interval !== null
    && store.getState().status === TimerConstants.STATUS_STOPPED
}

export const isFinished = (store) => {
  return interval !== null
    && store.getState().duration === 0
}

export const start = (store) => {
  interval = setInterval(() => {
    store.dispatch({ type: TimerConstants.ACTION_TICK });
  }, TimeConstants.SECOND);
}

export const stop = (store) => {
  clearInterval(interval);
  interval = null;
}

export const finish = (store) => {
  stop(store)
  alert(`Your ${store.getState().durationOption} is finished.`)
  store.dispatch({ type: TimerConstants.ACTION_RESET })
}

const IntervalHandler = (store) => {
  return () => {
    if (isRunning(store)) start(store)
    if (isStopped(store)) stop(store)
    if (isFinished(store)) finish(store)
  }
}
export default IntervalHandler
