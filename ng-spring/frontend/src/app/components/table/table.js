System.register(['angular2/common', 'angular2/core', '../../common/loader'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, loader_1;
    var TableElementsCount, TablePagination, TableSort, tableDirectives;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            }],
        execute: function() {
            TableElementsCount = (function () {
                function TableElementsCount() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TableElementsCount.prototype, "page", void 0);
                TableElementsCount = __decorate([
                    core_1.Component({
                        selector: 'table-elements-count',
                        templateUrl: 'app/components/table/elements-count.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableElementsCount);
                return TableElementsCount;
            })();
            exports_1("TableElementsCount", TableElementsCount);
            TablePagination = (function () {
                function TablePagination() {
                }
                Object.defineProperty(TablePagination.prototype, "pagesIndexes", {
                    get: function () {
                        var pagesIndexes = [];
                        for (var i = 0; i < this.page.totalPages; i++) {
                            pagesIndexes.push(i + 1);
                        }
                        return pagesIndexes;
                    },
                    enumerable: true,
                    configurable: true
                });
                TablePagination.prototype.fetchPageNumbers = function (pageNumber) {
                    var observable = this.table.fetchPage(pageNumber - 1, this.page.size, this.getSort());
                    if (observable != null) {
                        loader_1.showLoading();
                        observable.subscribe(function () {
                        }, function (e) {
                            loader_1.hideLoading();
                        }, loader_1.hideLoading);
                    }
                };
                TablePagination.prototype.fetchPageSize = function (pageSize) {
                    var observable = this.table.fetchPage(this.page.number, pageSize, this.getSort());
                    if (observable != null) {
                        loader_1.showLoading();
                        observable.subscribe(function () { }, function (e) {
                            loader_1.hideLoading();
                        }, loader_1.hideLoading);
                    }
                };
                TablePagination.prototype.fetchNextPage = function () {
                    if (this.page.number + 1 >= this.page.totalPages) {
                        return;
                    }
                    var observable = this.table.fetchPage(this.page.number + 1, this.page.size, this.getSort());
                    if (observable != null) {
                        loader_1.showLoading();
                        observable.subscribe(function () { }, function (e) {
                            loader_1.hideLoading();
                        }, loader_1.hideLoading);
                    }
                };
                TablePagination.prototype.fetchPreviousPage = function () {
                    if (this.page.number == 0) {
                        return;
                    }
                    var observable = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort());
                    if (observable != null) {
                        loader_1.showLoading();
                        observable.subscribe(function () { }, function (e) {
                            loader_1.hideLoading();
                        }, loader_1.hideLoading);
                    }
                };
                TablePagination.prototype.getSort = function () {
                    if (this.page.sort != null && this.page.sort.length > 0) {
                        return this.page.sort[0];
                    }
                    else {
                        return null;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TablePagination.prototype, "table", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TablePagination.prototype, "page", void 0);
                TablePagination = __decorate([
                    core_1.Component({
                        selector: 'table-pagination',
                        templateUrl: 'app/components/table/pagination.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TablePagination);
                return TablePagination;
            })();
            exports_1("TablePagination", TablePagination);
            TableSort = (function () {
                function TableSort() {
                    this.sortClass = false;
                    this.sortAscClass = false;
                    this.sortDescClass = false;
                }
                TableSort.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (changes['page']) {
                        var defineValues = function (s, sa, sd, dir) {
                            _this.sortClass = s;
                            _this.sortDirection = dir;
                            _this.sortAscClass = sa;
                            _this.sortDescClass = sd;
                        };
                        if (this.page.sort == null) {
                            defineValues(true, false, false, 'ASC');
                            return;
                        }
                        var one = this.page.sort.find(function (e) { return e.property === _this.property; });
                        if (one == null) {
                            defineValues(true, false, false, 'ASC');
                        }
                        else {
                            if (one.direction === 'ASC') {
                                defineValues(false, true, false, 'DESC');
                            }
                            else {
                                defineValues(false, false, true, 'ASC');
                            }
                        }
                    }
                };
                TableSort.prototype.sortByProperty = function () {
                    var sort;
                    sort = { property: this.property, direction: this.sortDirection };
                    var pageNumber = this.page.number - 1;
                    if (pageNumber < 0) {
                        pageNumber = 0;
                    }
                    var observable = this.table.fetchPage(pageNumber, this.page.size, sort);
                    if (observable != null) {
                        loader_1.showLoading();
                        observable.subscribe(function () {
                        }, function () {
                            loader_1.hideLoading();
                        }, loader_1.hideLoading);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TableSort.prototype, "label", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TableSort.prototype, "property", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TableSort.prototype, "table", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TableSort.prototype, "page", void 0);
                TableSort = __decorate([
                    core_1.Component({
                        selector: 'table-sort',
                        templateUrl: 'app/components/table/sort.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableSort);
                return TableSort;
            })();
            exports_1("TableSort", TableSort);
            exports_1("tableDirectives", tableDirectives = [
                TableElementsCount,
                TablePagination,
                TableSort,
            ]);
        }
    }
});
//# sourceMappingURL=table.js.map