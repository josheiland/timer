import React from 'react'
import Timer from './Timer'
import NavBar from './NavBar'
import useTimer from './UseTimer'

function App() {

  const seconds = useTimer(0)

  return (
    <div>
      <SecondsDispatch.Provider value={dispatch}>
        <NavBar seconds={seconds} />
        <Timer seconds={seconds} />
      </SecondsDispatch.Provider>
    </div>
  )
}

export default App;