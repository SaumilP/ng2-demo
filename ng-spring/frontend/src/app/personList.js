System.register(['angular2/common', 'angular2/core', "angular2/router", './constants', './service/personService', './components/table/table', "./common/loader"], function(exports_1) {
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
    var common_1, core_1, router_1, constants_1, personService_1, table_1, loader_1;
    var PersonListComponent;
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
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            }],
        execute: function() {
            PersonListComponent = (function () {
                function PersonListComponent(personService, router) {
                    this.personService = personService;
                    this.router = router;
                }
                /**
                 * Default method gets executed on activation of the route
                 */
                PersonListComponent.prototype.ngOnInit = function () {
                    var observable = this.fetchPage(0, constants_1.defaultItemsCountPerPage, null);
                    loader_1.showLoading();
                    observable.subscribe(function () { }, loader_1.hideLoading, loader_1.hideLoading);
                    this.self = this;
                };
                /**
                 * Wrapper method calling underlying service for given PageNumber and given page size
                 * @param pageNumber    Indicates page number
                 * @param pageSize      Indicates page size
                 * @param sort          Indicate if there is any table column sorting is requested by user
                 * @returns {Rx.Observable<PaginationPage<any>>}    paginated person collection
                 */
                PersonListComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
                    var _this = this;
                    var observable = this.personService.findPersons(pageNumber, pageSize, sort);
                    observable.subscribe(function (personPage) { return _this.personPage = personPage; });
                    return observable;
                };
                /**
                 * Navigates to details page by making use of navigateByInstruction
                 * @param person    Selected Person from UI
                 */
                PersonListComponent.prototype.goToDetails = function (person) {
                    this.router.navigateByInstruction(this.router.generate(['/Person', {
                            personId: person.id
                        }]));
                };
                PersonListComponent.prototype.delete = function (person) {
                    var _this = this;
                    var observable = this.personService.deletePerson(person.id);
                    loader_1.showLoading();
                    observable.switchMap(function () {
                        return _this.fetchPage(0, constants_1.defaultItemsCountPerPage, null);
                    }).subscribe(function (r) {
                    }, loader_1.hideLoading, loader_1.hideLoading);
                };
                PersonListComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/personList.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, table_1.tableDirectives]
                    }),
                    __param(1, core_1.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [personService_1.PersonService, router_1.Router])
                ], PersonListComponent);
                return PersonListComponent;
            })();
            exports_1("PersonListComponent", PersonListComponent);
        }
    }
});
//# sourceMappingURL=personList.js.map