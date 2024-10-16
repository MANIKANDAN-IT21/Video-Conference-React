import React, { useState } from 'react';
import VideoConference from './VideoConference';

const App = () => {
  const [roomName, setRoomName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    setIsJoined(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {!isJoined ? (
        <div>
          <h1>Join a Video Conference</h1>
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            style={{ margin: '10px', padding: '8px' }}
          />
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={{ margin: '10px', padding: '8px' }}
          />
          <button onClick={handleJoin} style={{ padding: '10px 20px' }}>
            Join Conference
          </button>
        </div>
      ) : (
        <VideoConference roomName={roomName} displayName={displayName} />
      )}
    </div>
  );
};

export default App;
