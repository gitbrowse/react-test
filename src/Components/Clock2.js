import React from "react";
import PropTypes from 'prop-types';

class Clock2 extends React.Component{
  static propTypes = {
    baseCount: PropTypes.number,
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      date: new Date().toLocaleTimeString(),
      text: 'controlled',
      addResult: '',
      o: {
        innerCount: 1,
      },
      outerCount: 1,
    };
    this.inputRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state.o.innerCount)
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(nextState.o.innerCount);
  //   return true;
  // }

  componentDidMount() {
    // this.tick();
    // this.test();
    // this.test2();

    // setInterval(() => {
    //   const o = this.state.o;
    //   this.setState({
    //     // o,
    //     outerCount: this.state.outerCount,
    //     // o: {
    //     //   ...this.state.o,
    //     //   innerCount: this.state.o.innerCount + 1,
    //     // }
    //   })
    // }, 500)

    console.log(React.Children.count(this.props.children))


    console.log('React.children', React.Children);
    console.log('this.props.children', this.props.children);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  test() {
    // this.setState({
    //   count: this.state.count + 1,
    // })
    this.setState((state, props) => ({
      count: state.count + 1,
    }))
    console.log('count:', this.state.count)
    // this.setState({
    //   count: this.state.count + 1,
    // })
    this.setState((state, props) => ({
      count: state.count + 1,
    }))
    console.log('count:', this.state.count)
    // this.setState({
    //   count: this.state.count + 2,
    // })
    this.setState((state, props) => ({
      count: state.count + 2,
    }))
    console.log('count:', this.state.count)
  }
  test2() {
    setTimeout(() => {
      // this.state.count = 2;
      this.setState({
        count: this.state.count + 1,
      })
      // this.setState((state, props) => ({
      //   count: state.count + 1,
      // }))
      console.log('count:', this.state.count)
      this.setState({
        count: this.state.count + 1,
      })
      // this.setState((state, props) => ({
      //   count: state.count + 1,
      // }))
      console.log('count:', this.state.count)
      this.setState({
        count: this.state.count + 2,
      })
      // this.setState((state, props) => ({
      //   count: state.count + 2,
      // }))
      console.log('count:', this.state.count)


      // this.setState((state, props) => ({
      //   count: state.count + 1,
      // }))
      // this.setState((state, props) => ({
      //   count: state.count + 1,
      // }))
      // this.setState((state, props) => ({
      //   count: state.count + 1,
      // }))
    }, 1000);
  }
  tick() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  setText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  updateResult = () => {
    this.setState({
      addResult: this.state.text + ' & ' + this.inputRef.current.value,
    })
  }

  render() {

    console.log('render');
    const { count, date, text, addResult, o, outerCount } = this.state;
    const { baseCount, prop2 } = this.props;

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>date: { date }.</h2>
        <h2>count: { count }</h2>
        <button onClick={ () => { this.setState({count: this.state.count + 1}) } }>add count</button>
        <h2>baseCount: { baseCount }</h2>
        <button onClick={ () => { this.props.changeBaseCount(count) } }>add baseCount</button>
        <p>prop2: { prop2 }</p>

        <input type="text" value={ text } onInput={ this.setText }/>
        <input defaultValue={ 'uncontrolled' } type='text' ref={ this.inputRef } />
        <p>input1 + input2: { addResult }</p>
        <button onClick={ this.updateResult }>update</button>
        <div>{ this.props.children } { this.props.slot }</div>
        <h1>innerCount: { o.innerCount }</h1>
        <h1>outerCount: { outerCount }</h1>
      </div>
    );
  }
}

// Clock2.propTypes = {
//   baseCount: PropTypes.number,
//   prop2: PropTypes.string,
// }

export default Clock2;