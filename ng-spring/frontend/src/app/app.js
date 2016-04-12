System.register(['angular2/common', 'angular2/core', 'angular2/router', './personList', './person'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, personList_1, person_1;
    var App;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personList_1_1) {
                personList_1 = personList_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, personList_1.PersonListComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'PersonList', component: personList_1.PersonListComponent },
                        { path: '/person', name: 'Person', component: person_1.PersonComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map