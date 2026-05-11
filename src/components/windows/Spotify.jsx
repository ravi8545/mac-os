import React from "react";
import MacWindows from "./MacWindows";
import "./spotify.scss";

const Spotify = ({windowName, setWindowsState}) => {
  return (
    <MacWindows width="20vw" windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/30WCmigi6kMczGUKjmtqxb?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
          title="Spotify Player"
        ></iframe>
      </div>
    </MacWindows>
  );
};

export default Spotify;