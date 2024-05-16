import React, { useState } from 'react'

const Greetings = () => {
  const [isTextChanged, setIsTextChanged] = useState(false)

  const textChangeHandler = () => {
    setIsTextChanged((prevState) => !prevState)
  }
  return (
    <div>
      Hello world!
      <h2>{isTextChanged ? "Changed" : "It's good to see you."}</h2>
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  )
}

export default Greetings