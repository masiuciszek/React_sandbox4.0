import React, { useState } from "react"
import "./App.css"
import StarsWrapper from "./components/StarsWrapper"

function App() {
  const [stars, setStars] = useState(Array.from({ length: 5 }, (_, i) => i + 1))
  return (
    <div className="App">
      <StarsWrapper onStars={stars} />
    </div>
  )
}

export default App
