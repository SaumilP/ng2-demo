System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './service/personService', './app'], function(exports_1) {
    var core_1, browser_1, router_1, personService_1, app_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), personService_1.PersonService]);
        }
    }
});
//# sourceMappingURL=index.js.map