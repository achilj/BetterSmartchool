// Gebruik browser.runtime.onInstalled in plaats van chrome.runtime.onInstalled
browser.runtime.onInstalled.addListener(function () {
    // Gebruik browser.declarativeContent.onPageChanged in plaats van chrome.declarativeContent.onPageChanged
    browser.declarativeContent.onPageChanged.removeRules(undefined, function () {
        browser.declarativeContent.onPageChanged.addRules([{
            conditions: [
                // Gebruik browser.declarativeContent.PageStateMatcher in plaats van chrome.declarativeContent.PageStateMatcher
                new browser.declarativeContent.PageStateMatcher({
                    pageUrl: { hostContains: '.smartschool.be' },
                })
            ],
            actions: [new browser.declarativeContent.ShowPageAction()]
        }]);
    });
});
