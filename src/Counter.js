import React from 'react'
import { connect } from 'react-redux'

function Counter( props ) {
  return (
    <div>
      <h2>Simple React Redux Counter App Example</h2>
      <p>Count: { props.count }</p>
      <button onClick={ props.onIncrementClick }>increment</button>
      <button onClick={ props.onDecrementClick }>decrement</button>
    </div>
  )
}

function mapStateToProps( state ) {
  return {
    count: state.count
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT' }
      dispatch(action)
    },
    onDecrementClick: () => {
      const action = { type: 'DECREMENT' }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)