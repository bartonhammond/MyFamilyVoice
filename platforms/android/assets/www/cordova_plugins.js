cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.twilioclient/www/tcPlugin.js",
        "id": "com.phonegap.plugins.twilioclient.TCPlugin",
        "clobbers": [
            "window.tcplugin"
        ]
    },
    {
        "file": "plugins/org.jshybugger.cordova/www/jsHybuggerLoader.js",
        "id": "org.jshybugger.cordova.jsHybuggerLoader",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.twilioclient": "2.0.0",
    "org.jshybugger.cordova": "4.2.8"
}
// BOTTOM OF METADATA
});