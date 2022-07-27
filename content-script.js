console.log('<----- Content script started running ----->');

function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
	//script.src = chrome.extension.getURL('inject-script.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('inject-script.js'), 'body');

window.addEventListener("message", function (event) {
    // only accept messages from the current tab
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE") && typeof chrome.app.isInstalled !== 'undefined') {
        chrome.runtime.sendMessage({ essential: event.data.essential });
    }
}, false);



/*var s = document.createElement('script');
s.src = chrome.extension.getURL('js/injected.js');
(document.head || document.documentElement).appendChild(s);

s.onload = function(){

  var url=chrome.runtime.getURL("html/popup.html");

  var evt=document.createEvent("CustomEvent");
  evt.initCustomEvent("yourCustomEvent", true, true, url);
  document.dispatchEvent(evt);
};*/