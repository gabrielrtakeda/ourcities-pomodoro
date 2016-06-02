import * as TimeConstants  from './../constants/time'
import * as TimerConstants from './../timer/constants'

/**
 * TODO: Procurar forma mais elegante implementar esse comportamento.
 */
let interval = null;

const isRunning = (store) => {
  return interval === null
    && store.getState().status === TimerConstants.STATUS_RUNNING
}

const isStopped = (store) => {
  return interval !== null
    && store.getState().status === TimerConstants.STATUS_STOPPED
}

const start = (store) => {
  interval = setInterval(() => {
    store.dispatch({ type: TimerConstants.ACTION_TICK });
  }, TimeConstants.SECOND);
}

const stop = (store) => {
  clearInterval(interval);
  interval = null;
}

const IntervalHandler = (store) => {
  return () => {
    if (isRunning(store)) start(store)
    if (isStopped(store)) stop(store)
  }
}
export default IntervalHandler
