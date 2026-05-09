import React from 'react'
import MacWindows from './MacWindows.jsx'
import './resume.scss'

const Resume = () => {
  return (
     <MacWindows>
        <div className="resume-window">
            <embed src='/resume.pdf' frameBorder="0"></embed>
        </div>
     </MacWindows>
  )
}

export default Resume