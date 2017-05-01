const DEFAULT_BASE_URL = "http://www.library.drexel.edu/cgi-bin/r.cgi?url=$@";

function transformUrl(url, callback) {
    browser.storage.sync.get({"base_url": DEFAULT_BASE_URL}, function(items) {
        var base = items["base_url"];
        if (base.indexOf("$@") >= 0) {
            base = base.replace("$@", url);
        }
        callback(base);
    });
}

browser.browserAction.onClicked.addListener(function(tab) {
    transformUrl(tab.url, function(newUrl) {
        browser.tabs.update(tab.id, {"url": newUrl});
    });
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    transformUrl(info.linkUrl, function(newUrl) {
        browser.tabs.create({"url": newUrl});
    });
});

function initialize() {
    browser.contextMenus.create({
        title: "Open Link with EZProxy",
        contexts: ["link"],
        id: "redirect"
    });
}

browser.runtime.onInstalled.addListener(function(details) {
    browser.storage.sync.get({"base_url": null}, function(items) {
        if (!items["base_url"]) {
            // migrate old format
            var legacyBase = localStorage["base_url"];
            if (legacyBase) {
                delete localStorage["base_url"];
            } else {
                legacyBase = DEFAULT_BASE_URL;
            }
            browser.storage.sync.set({"base_url": legacyBase}, function() {
                initialize();
            });
        } else {
            initialize();
        }
    });
});

