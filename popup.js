chrome.extension.onRequest.addListener(function(links) {
  chrome.downloads.download({url : links});
});

window.onload = function() {
  document.getElementById('downloadimage').onclick = function() {
    // chrome.downloads.download({url :'https://drscdn.500px.org/photo/88334325/m%3D2048/0cc4f929cf67d674e16c08f7ace6b331'});
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, {file: 'send_links.js', allFrames: true});
      });
    });
  }
};
