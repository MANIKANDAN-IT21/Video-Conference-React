import React, { useEffect, useRef } from 'react';

const VideoConference = ({ roomName, displayName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: roomName,
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: displayName,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();  // Cleanup on component unmount
  }, [roomName, displayName]);

  return <div ref={jitsiContainerRef} style={{ height: '100vh', width: '100%' }} />;
};

export default VideoConference;
