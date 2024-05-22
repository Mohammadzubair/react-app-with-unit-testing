import React, { useState } from 'react'

const OnButtonClickEventBasic = () => {
  const [changeText, setChangeText] = useState(false)

  const handleChangeText = () => {
    setChangeText((prevState) => !prevState)
  }
  return (
    <div>
      <h2>Basics on click event</h2>
      <h3 style={{ backgroundColor: changeText ? "blue" : "green", color: "white" }}>{changeText ? "New content" : "Old content"} </h3>
      <button onClick={handleChangeText}>Click on me</button>
    </div>
  )
}

export default OnButtonClickEventBasic