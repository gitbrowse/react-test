import React from 'react';
import './App.css';
import { Clock } from "./Components/Clock";
import Clock2 from "./Components/Clock2";
import Search from "./Components/Search";
import Container from "./Components/Container";
import Clock3 from "./Components/Clock3";
import Test2 from "./Components/Test2";
import { CountContext } from "./context/context";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// console.log('CountContext', CountContext);
// console.log('Container', Container);


class App extends React.Component{

  // static getDerivedStateFromError(error) {
  //   console.log('error', error);
  //   return {
  //     hasError: true,
  //   }
  // }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({
      hasError: true,
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      baseCount: 1,
      hasError: false,
    }
  }

  changeBaseCount = (val) => {
    this.setState({
      baseCount: val,
    })
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     baseCount: this.state.baseCount + 1,
    //   })
    // }, 1000)
  }

  render() {
    const { baseCount, hasError } = this.state;
    return hasError ? <div>error handling</div> : (
      <div className="App">
        <Router>
          <h1>router:
            {/*<Link className='link' to={{ pathname: '/Clock', search: '?name=xx', hash: '#test', state: { fromDashboard: true } }}>Clock</Link>*/}
            <Link className='link' to='/Clock1'>Clock1</Link>
            <Link className='link' to='/Clock2'>Clock2</Link>
            <Link className='link' to='/Clock3'>Clock3</Link>
            <Link className='link' to='/Search'>Search</Link>
            <Link className='link' to='/Container'>Container</Link>
            <Link className='link' to='/Test2'>Test2</Link>
          </h1>
          <Switch>
            <Route path='/Clock'>
              {/*<Clock prop1={1} prop2={'2'}/>*/}
              <Clock />
            </Route>
            <Route path='/Clock2'>
              <Clock2 baseCount={baseCount} prop2={'a'} slot={<div>slot message</div>} changeBaseCount={this.changeBaseCount}>
                text from app
              </Clock2>
            </Route>
            <Route path='/Clock3' component={ Clock3 } />
            <Route path='/Search' component={ Search } />
            <Route path='/Container'>
              <CountContext.Provider value={ baseCount }>
                <Container />
              </CountContext.Provider>
            </Route>
            <Route path='/Test2' component={ Test2 } />
            <Redirect from='*' to='/Test2' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
