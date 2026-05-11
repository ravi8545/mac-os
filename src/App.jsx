import React from 'react'
import './app.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from './components/windows/Spotify.jsx'
import Cli from './components/windows/Cli'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
import { useState } from 'react'


const App = () => {

  const [windowsState, setWindowsState] = useState(
    {
      github: false,
      note: false,
      resume: false,
      spotify: false,
      cli: false
    }
  )
  return (
    <main>
      <Doc windowsState={windowsState} setWindowsState={setWindowsState} />
      <Nav />
      {windowsState.github && <Github windowName='github' windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName='note' windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName='resume' windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName='spotify' windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName='cli' windowsState={windowsState} setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App