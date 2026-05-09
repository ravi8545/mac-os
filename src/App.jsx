import React from 'react'
import './app.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows.jsx'
import Github from './components/windows/Github.jsx'




const App = () => {
  return (
    <main>
      <Doc />
      <Nav />
      <Github />
    </main>
  )
}

export default App