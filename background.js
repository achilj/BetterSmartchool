// Gebruik browser.runtime.onInstalled in plaats van browser.runtime.onInstalled
browser.runtime.onInstalled.addListener(function () {
    // Gebruik browser.declarativeContent.onPageChanged in plaats van browser.declarativeContent.onPageChanged
    browser.declarativeContent.onPageChanged.removeRules(undefined, function () {
        browser.declarativeContent.onPageChanged.addRules([{
            conditions: [
                // Gebruik browser.declarativeContent.PageStateMatcher in plaats van browser.declarativeContent.PageStateMatcher
                new browser.declarativeContent.PageStateMatcher({
                    pageUrl: { hostContains: '.smartschool.be' },
                })
            ],
            actions: [new browser.declarativeContent.ShowPageAction()]
        }]);
    });
});
