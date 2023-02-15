const stunUrl = "stun:stun.l.google.com:19302", //STUN URL
  turnUrl = "turn:170.64.182.51", //TURN URL
  turnUsername = "username", //TURN username
  turnPassword = "password"; //TURN password

var signalingURL = "";

if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  signalingURL = "http://localhost:9000"; //local signaling server URL
} else {
  signalingURL = "http://170.64.182.51:9000"; //production signaling server URL
}

export { signalingURL, stunUrl, turnPassword, turnUrl, turnUsername };
