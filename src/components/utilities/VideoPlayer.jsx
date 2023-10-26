"use client";
import { ClipboardText, Play, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "400",
    height: "300",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleCloseButton} className="float-right">
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={videoId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  const ButtonPlayer = () => {
    return (
      <div className='fixed bottom-2 right-2 flex flex-col gap-2 items-center transition-all'>
        <button
          onClick={handleCloseButton}
          className="flex gap-2 bg-color-accent text-color-secondary p-2 rounded-md items-center w-full hover:bg-color-secondary hover:text-color-primary transition-all"
        >
          <Play size={20} weight="fill" /> Watch Trailer
        </button>
      </div>
    );
  };
  return isOpen ? <Player /> : <ButtonPlayer />;
};

export default VideoPlayer;
