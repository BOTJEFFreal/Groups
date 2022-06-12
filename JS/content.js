console.log("content")




chrome.runtime.onMessage.addListener(gotMessage);//Messager API receiving message from background.js

function gotMessage(message, sneder, sendResponse){
   
}

