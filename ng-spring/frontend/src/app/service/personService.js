System.register(['../constants', 'rxjs/Rx'], function(exports_1) {
    var constants_1, Rx;
    var PersonService;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            }],
        execute: function() {
            PersonService = (function () {
                function PersonService() {
                }
                PersonService.prototype.findPersons = function (page, pageSize, sort) {
                    var params = { size: pageSize, page: page };
                    if (sort != null) {
                        params.sort = sort.property + "," + sort.direction;
                    }
                    return Rx.Observable.fromPromise($.ajax({
                        dataType: "json",
                        url: constants_1.webServiceEndpoint + '/person',
                        data: params
                    })).publish().refCount();
                };
                PersonService.prototype.getPerson = function (id) {
                    return Rx.Observable.fromPromise($.ajax({
                        dataType: "json",
                        url: constants_1.webServiceEndpoint + '/person/' + id
                    })).publish().refCount();
                };
                PersonService.prototype.deletePerson = function (id) {
                    return Rx.Observable.fromPromise($.ajax({
                        method: "DELETE",
                        url: constants_1.webServiceEndpoint + '/person/' + id
                    })).publish().refCount();
                };
                return PersonService;
            })();
            exports_1("PersonService", PersonService);
        }
    }
});
//# sourceMappingURL=personService.js.map