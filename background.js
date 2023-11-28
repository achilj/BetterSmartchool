browser.runtime.onInstalled.addListener(function () {
    browser.declarativeContent.onPageChanged.removeRules(undefined, function () {
        browser.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new browser.declarativeContent.PageStateMatcher({
                    pageUrl: { hostContains: '.smartschool.be' },
                })
            ],
            actions: [new browser.declarativeContent.ShowPageAction()]
        }]);
    });
});
