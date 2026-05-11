import React from "react";
import MacWindows from "./MacWindows";
import { ReactTerminal } from "react-terminal";
import "./cli.scss";

const commands = {
  help: () => `Available commands:
help        — Show this help message
about       — Short bio
skills      — List key technologies
projects    — Highlighted projects
resume      — Resume link
contact     — Contact information
social      — Social profiles
experience  — Work experience
education   — Education summary
hello       — Say hello`,

  about: () => "MERN Stack Developer & MCA Student",

  skills: () => `React
Node.js
MongoDB
Express
JavaScript
TypeScript
Redux
SASS
HTML/CSS`,

  projects: () => `- Portfolio Website — Personal site built with React + Vite
- Note App — Simple note-taking app
- Spotify Clone — UI clone using React`,

  resume: () => "Resume (placeholder): https://example.com/resume.pdf",

  contact: () => `Email: raviprajapati@example.com (placeholder)
Phone: +91-XXXXXXXXXX (placeholder)`,

  contacts: () => `Email: raviprajapati@example.com (placeholder)
Phone: +91-XXXXXXXXXX (placeholder)`,

  social: () => `GitHub: https://github.com/yourusername (placeholder)
LinkedIn: https://linkedin.com/in/yourusername (placeholder)`,

  experience: () => "Experience: Freelance and internships — Frontend & MERN stack",

  education: () => "MCA — [Your University] (placeholder)",

  hello: () => "Hello Ravi 👋 — type 'help' to list available commands",
};

const Cli = ({windowName, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <ReactTerminal
          commands={commands}
          welcomeMessage={`Welcome to Ravi's portfolio terminal!\n\n${commands.help()}`}
          prompt="raviprajapati@cli:~$"
          themes={{
            customTheme: {
              themeBGColor: "#000000",
              themeToolbarColor: "#1a1a1a",
              themeColor: "#00ff88",
              themePromptColor: "#00ff88",
            },
          }}
          theme="customTheme"
        />
      </div>
    </MacWindows>
  );
};

export default Cli;