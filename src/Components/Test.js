import React from "react";
import { CountContext } from "../context/context";

const Test1 = (props) => {
  return (
    <div>
      <h1>test1: { props.value }</h1>
      <CountContext.Consumer>
        { (count) => <p>count: { count }</p> }
      </CountContext.Consumer>
    </div>
  )
}

const Test2 = (value) => <div>here is test2, value: { value }</div>

const Test3 = (props) => (
  <div>
    <h1>here is test3</h1>
    { props.render(345) }
  </div>
)

class Test extends React.Component {

  static contextType = CountContext;

  componentDidMount() {
    console.log('test3 this', this)
  }


  render() {
    return (
      <div>
        <h1>test11 { true && -0 }</h1>

        <CountContext.Consumer>
          { (count) => <p>count: { count }</p> }
        </CountContext.Consumer>

        { Test2(123) }

        <Test3 render={ Test2 } />
        <Test3 render={ (value) => <Test1 value={ value }/> } />
      </div>
    )
  }
}

export default Test;




