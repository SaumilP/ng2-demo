import {CORE_DIRECTIVES} from 'angular2/common';
import {Component, enableProdMode} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PersonListComponent} from './personList';
import {PersonComponent} from './person';

enableProdMode();

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, PersonListComponent]
})
@RouteConfig([
    {path: '/', name: 'PersonList', component: PersonListComponent},
    {path: '/person', name: 'Person', component: PersonComponent}
])
export class App {

}