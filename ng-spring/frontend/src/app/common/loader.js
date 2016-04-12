System.register([], function(exports_1) {
    function showLoading() {
        console.log("loading");
    }
    exports_1("showLoading", showLoading);
    function hideLoading() {
        console.log("loaded");
    }
    exports_1("hideLoading", hideLoading);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=loader.js.map