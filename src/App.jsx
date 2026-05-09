import React from 'react'
import './app.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from './components/windows/Spotify.jsx'




const App = () => {
  return (
    <main>
      <Doc />
      <Nav />
      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main>
  )
}

export default App