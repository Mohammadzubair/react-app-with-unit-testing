import React, { useState } from 'react'

const OnChangeEvent = () => {
  const [userName, setUserName] = useState('')

  const handleChange = (event) => {
    const newName = event.target.value
    setUserName(event.target.value)
    console.log(newName)
  }
  return (
    <div>
      <br />
      <h2>The on change event</h2>
      <input value={userName} onChange={handleChange} type='text' placeholder='Enter Name' />
    </div>
  )
}

export default OnChangeEvent