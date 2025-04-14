'use client';

import type {Metadata} from 'next';
import './globals.css';
import {useEffect, useState} from 'react';

export default function RootLayout({children}: { children: React.ReactNode }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('background-video');
    if (video) {
      (video as HTMLVideoElement).onloadeddata = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  return (
    <html lang="en">
    <body className="h-screen w-screen overflow-hidden">
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        className="video-foreground"
        id="background-video"
        src="https://efb.vps-dev.co.uk/wp-content/uploads/2025/04/thg-video-bg.mp4"
      />
    </div>
    <div className="green-overlay"/>
    {videoLoaded ? (
      children
    ) : (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )}
    </body>
    </html>
  );
}

