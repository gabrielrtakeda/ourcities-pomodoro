import React                               from 'react'
import ReactDOM                            from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect }               from 'react-redux'
import { reducer }                         from './timer/reducer'
import { Timer }                           from './timer/component'
import actions                             from './timer/actions'
import IntervalHander                      from './handlers/interval'

const store           = createStore(reducer)
const mapStateToProps = state => ({ state })
const Component       = connect(mapStateToProps)(Timer)

const Root = () => (
  <Provider store={store}>
    <Component />
  </Provider>
)

const render = () => {
  ReactDOM.render(<Root />, document.getElementById('timer'))
}

store.subscribe(render)
store.subscribe(IntervalHander(store))

render()
