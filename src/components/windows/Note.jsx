import React, { use } from 'react'
import { useState, useEffect } from 'react'
import MacWindows from './MacWindows'
import Markdown from 'react-markdown'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'




const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.md").then(res => res.text()).then(data => {
            setMarkdown(data)
        })
    }, [])


    return (
        <MacWindows>
            <div className="note-window">
                {
                    markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>
                }
            </div>
        </MacWindows>
    )
}

export default Note