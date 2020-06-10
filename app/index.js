import document from "document";
import * as messaging from "messaging";
import { gettext } from "i18n";

const title = document.getElementById("title");
title.text = gettext("Planted trees:");
var count = document.getElementById("treecount");
test();

function Sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function test() {
 console.log("Vor der sleep-Funktion");
  if(count.text === ""){
   console.log("empty string");
 }
 else{
   console.log(count.text);
 }
 await Sleep(3000); // Pausiert die Funktion für 3 Sekunden
 console.log("Nach der Sleep Funktion");
 if(count.text === ""){
   count.text = gettext("No connection");
 }
 else{
   console.log(count.text);
 }
}


// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  count.text = (parseInt(evt.data)).toLocaleString();
}





