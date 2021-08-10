export const Clock = (props) => {

  let count = 0;

  console.log('clock props', props);
  // console.log('clock state', props.location.state);

  const add = (step, event) => {
    count+=step;
    console.log(count);
    console.log(event);
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <p>count: { count }</p>
      <button onClick={ (event) => { add(2, event) } }>add</button>
      <div>{ [1,2,3,4].map((item, index) => <p key={ index }>{item}</p>) }</div>
    </div>
  );
}