window.fgslytics = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    window.fgslytics[sender.tab.id] = message.essential || null;
});