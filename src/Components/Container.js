import React from 'react';
import Test from "./Test";

class Container extends React.Component{

  constructor(props) {
    super(props);
    this.testRef = React.createRef();
    this.h1Ref = React.createRef();
  }

  componentDidMount() {
    // console.log('h1Ref', this.h1Ref);
    // console.log('testRef', this.testRef);

  }

  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>Container</h1>
        <Test ref={this.testRef}/>
      </div>
    );
  }
}

export default Container;
