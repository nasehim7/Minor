chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  		sendResponse({farewell: sender.tab.url});
});           



