import {CORE_DIRECTIVES} from 'angular2/common';
import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from "angular2/router";
import * as Rx from "rxjs/Rx";
import {webServiceEndpoint, defaultItemsCountPerPage} from './constants'
import {PersonService} from './service/personService';
import {PaginationPage, PaginationPropertySort} from './common/pagination';
import {tableDirectives, Table} from './components/table/table';
import {showLoading, hideLoading} from "./common/loader";

@Component({
    selector: 'app',
    templateUrl: 'app/personList.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, tableDirectives]
})
export class PersonListComponent implements Table {
    personPage: any;

    // Singleton pattern in JS
    self:PersonListComponent;

    constructor(private personService: PersonService,
                @Inject(Router) private router: Router){
    }

    /**
     * Default method gets executed on activation of the route
     */
    ngOnInit(){
        let observable: Rx.Observable<PaginationPage<any>> = this.fetchPage(0, defaultItemsCountPerPage, null);
        showLoading();
        observable.subscribe(() => {}, hideLoading, hideLoading);
        this.self = this;
    }

    /**
     * Wrapper method calling underlying service for given PageNumber and given page size
     * @param pageNumber    Indicates page number
     * @param pageSize      Indicates page size
     * @param sort          Indicate if there is any table column sorting is requested by user
     * @returns {Rx.Observable<PaginationPage<any>>}    paginated person collection
     */
    fetchPage(pageNumber: number, pageSize: number, sort:PaginationPropertySort) : Rx.Observable<PaginationPage<any>> {
        let observable: Rx.Observable<PaginationPage<any>> = this.personService.findPersons(pageNumber, pageSize, sort);
        observable.subscribe(personPage => this.personPage = personPage);
        return observable;
    }

    /**
     * Navigates to details page by making use of navigateByInstruction
     * @param person    Selected Person from UI
     */
    goToDetails(person){
        this.router.navigateByInstruction(this.router.generate(['/Person', {
            personId: person.id
        }]));
    }

    delete(person){
        let observable: Rx.Observable<PaginationPage<any>> = this.personService.deletePerson(person.id);
        showLoading();
        observable.switchMap(() => {
            return this.fetchPage(0, defaultItemsCountPerPage, null);
        }).subscribe(r => {
        }, hideLoading, hideLoading);
    }
}