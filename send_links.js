var imageContainer = document.getElementsByClassName('photo');
chrome.extension.sendRequest(imageContainer[0].src);
