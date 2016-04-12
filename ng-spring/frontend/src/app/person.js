System.register(['angular2/common', 'angular2/core', "angular2/router", "./common/loader", './components/table/table', './service/personService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var common_1, core_1, router_1, loader_1, table_1, personService_1;
    var PersonComponent;
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
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            }],
        execute: function() {
            PersonComponent = (function () {
                function PersonComponent(routeParams, router, location, personService) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.location = location;
                    this.personService = personService;
                }
                PersonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var param = this.routeParams.params['personId'];
                    this.personService.getPerson(Number(param)).subscribe(function (p) { return _this.person = p; });
                };
                PersonComponent.prototype.delete = function (person) {
                    var _this = this;
                    var observable = this.personService.deletePerson(person.id);
                    loader_1.showLoading();
                    observable.subscribe(function () {
                    }, loader_1.hideLoading, function () {
                        _this.router.navigateByInstruction(_this.router.generate(['/PersonList']));
                        loader_1.hideLoading();
                    });
                };
                PersonComponent.prototype.back = function () {
                    // TODO find better alternative
                    this.location.back();
                };
                PersonComponent = __decorate([
                    core_1.Component({
                        selector: 'app/person',
                        templateUrl: 'app/person.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, table_1.tableDirectives]
                    }),
                    __param(0, core_1.Inject(router_1.RouteParams)),
                    __param(1, core_1.Inject(router_1.Router)),
                    __param(2, core_1.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [Object, router_1.Router, router_1.Location, personService_1.PersonService])
                ], PersonComponent);
                return PersonComponent;
            })();
            exports_1("PersonComponent", PersonComponent);
        }
    }
});
//# sourceMappingURL=person.js.map