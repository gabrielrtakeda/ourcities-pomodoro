import * as TimerConstants from './../timer/constants'

export default {
  start : () => ({ type : TimerConstants.ACTION_START }),
  stop  : () => ({ type : TimerConstants.ACTION_STOP }),
  reset : () => ({ type : TimerConstants.ACTION_RESET }),
}
