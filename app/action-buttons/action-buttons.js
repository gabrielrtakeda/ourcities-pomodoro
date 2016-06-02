import React                               from 'react'
import ReactDOM                            from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect }               from 'react-redux'
import { ActionButtons }                   from './component'
import actions                             from './actions'

const mapStateToProps    = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
const Component = connect(mapStateToProps, mapDispatchToProps)(ActionButtons)

export default {
  actions,
  Component
}
