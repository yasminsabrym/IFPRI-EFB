'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
    <>
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
      <div className="green-overlay" />
      {videoLoaded ? (
        children
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-10 w-10 animate-spin text-white" />
        </div>
      )}
    </>
  );
}
