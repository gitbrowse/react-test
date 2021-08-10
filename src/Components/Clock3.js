import { useState, useEffect } from 'react'

const Clock3 = () => {

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  for(let i=0;i< 1000000000;i++){}

  console.log('count outer', count)
  useEffect(() => {
    setTimeout(() => {
      console.log('count', count)

      setCount(preValue => preValue + 1);

      console.log('count', count)

      setCount(preValue => preValue + 1);

      console.log('count', count)
    }, 100)
  }, [])

  // useEffect(() => {
  //   console.log('effect');
  //   const timer = setInterval(() => {
  //     console.log('timer count', count)
  //     setCount(count + 1);
  //   }, 1000)
  //   return () => {
  //     console.log('clear', count);
  //     clearInterval(timer);
  //   }
  // }, [])

  return (
    <div>
      <h1>clock3</h1>
      <p>count: { count }</p>
    </div>
  )
}

export default Clock3;