import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// function App() {
//   const greeting = 'Hi, Tom!'
//   const dom = <h1 className='foo'>{greeting}</h1>
//   return dom;
// }

import {connect} from 'react-redux'
import {increment, decrement} from '../actions'

// const App = () => (<Counter></Counter>)

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
