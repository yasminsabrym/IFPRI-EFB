'use client';

import React, {useState, useEffect, useRef} from 'react';

export default function ClientLayout({children}: {children: React.ReactNode}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const handleVideoError = () => {
      console.error('Error loading video');
      setVideoLoaded(true); // Ensure loading completes even on error
    };

    if (video) {
      video.addEventListener('loadeddata', handleVideoLoad);
      video.addEventListener('error', handleVideoError);
    }

    // Implement a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      setVideoLoaded(true);
      console.warn('Video loading timed out.');
    }, 10000); // 10 seconds

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleVideoLoad);
        video.removeEventListener('error', handleVideoError);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline // Recommended for mobile devices
          className="video-foreground"
          id="background-video"
          src="https://efb.vps-dev.co.uk/wp-content/uploads/2025/04/thg-video-bg.mp4"
        />
      </div>
      <div className="green-overlay" />
      <div className="content">{children}</div>
      {!videoLoaded && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <style jsx>{`
        .content {
          position: relative;
          z-index: 2; /* Ensure content is above video and overlay */
        }

        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -100;
        }

        .video-foreground {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
        }

        .green-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #0a5d50;
          opacity: 0.35;
          pointer-events: none;
          z-index: -99;
        }

        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(
            255,
            255,
            255,
            0.8
          ); /* Semi-transparent white background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #70c16e; /* Green color */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
