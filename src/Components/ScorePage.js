import React, { useState } from 'react'

const ScorePage = () => {

  const [count, setCount] = useState(0)
  const [testVal, setTestVal] = useState()

  const showMe = (e) => {
    setTestVal(e.target.value)
    console.log(testVal)
  }

  return (
    <div>
      <h1>Score Page</h1>
      <h2>You have clicked {count} times</h2>
      <button 
        onClick={() => setCount(count + 1)}
      >Click Me</button>

      <input type="text" onChange={(e)=>showMe(e)}/>
    </div>
  )
}

export default ScorePage