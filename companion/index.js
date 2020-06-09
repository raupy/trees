import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send messages
  sendMessage();
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}

// Send a message to the peer
function sendMessage() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    const url = 'https://api.ecosia.org/v1/trees/count'; 
    fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        // Send the data to peer as a message
       messaging.peerSocket.send(data.count);
        })
      .catch(function(error) {
        console.log("fetch error: " + + error.code + " - " + error.message);
      });
   }
}