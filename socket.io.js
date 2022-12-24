// Initialize Socket.IO
const socket = io();

// Get DOM elements
const startCallButton = document.getElementById('start-call-button');
const endCallButton = document.getElementById('end-call-button');
const localAudio = document.getElementById('local-audio');
const remoteAudio = document.getElementById('remote-audio');

// Set up call controls
startCallButton.addEventListener('click', () => {
  // Set up audio stream
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    localAudio.srcObject = stream;
    socket.emit('start call', stream);
  });
});
endCallButton.addEventListener('click', () => {
  // End audio stream
  localAudio.srcObject.getTracks().forEach(track => track.stop());
  socket.emit('end call');
});

// Set up Socket.IO event handlers
socket.on('start call', stream => {
  // Start audio stream
  remoteAudio.srcObject = stream;
});
socket.on('end call', () => {
  // End audio stream
  remoteAudio.srcObject.getTracks().forEach(track => track.stop());
});
