'use client';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="video-background">
        <video
          autoPlay
          loop
          className="video-foreground"
          id="background-video"
          src="https://efb.vps-dev.co.uk/wp-content/uploads/2025/04/thg-video-bg.mp4"
          muted
        ></video>
      </div>
      <div className="green-overlay" />
      <div className="content">{children}</div>

      <style jsx>{`
        .content {
        }
      `}</style>
    </>
  );
}
