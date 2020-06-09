import document from "document";
import * as messaging from "messaging";
import { gettext } from "i18n";

const title = document.getElementById("title");
title.text = gettext("Planted trees:");

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  let count = document.getElementById("treecount");
  count.text = (parseInt(evt.data)).toLocaleString();
}





