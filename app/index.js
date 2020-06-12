import document from "document";
import * as messaging from "messaging";
import { gettext } from "i18n";

const title = document.getElementById("title");
title.text = gettext("Planted trees:");
var count = document.getElementById("treecount");
count.text = gettext("Loading...");
load();

function Sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function load() {
 await Sleep(3500); // waiting for connection
 if(count.text === gettext("Loading...")){
   count.text = gettext("No connection");
 }
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  count.text = (parseInt(evt.data)).toLocaleString();
}
