//our root app component
import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES, Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/']">Home</a> | 
    <a [routerLink]="['/away']">Away</a> |
    <a [routerLink]="['/away/child']">Away-Child</a> |
    <a [routerLink]="['/invalid']">Page Not Found</a>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class App {
  sub: Subscription;
  
  constructor(
    public router: Router,
    public activated: ActivatedRoute,
    public titleService: Title
  ) {}
  
  ngOnInit() {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this.router.routerState)
      .map(state => {
        let route = this.activated;
        while(state.firstChild(route)) {
          route = state.firstChild(route);
        }
        return route;
      })
      .filter(route => route.outlet === PRIMARY_OUTLET)
      .flatMap(route => route.data)
      .subscribe(data => {
        console.log(data['title'])
        this.titleService.setTitle(data['title'] || "My default title");
      });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}