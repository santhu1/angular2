import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';


@Component({
  selector: 'away',
  
  directives: [ROUTER_DIRECTIVES],
  template: `
    See you soon!
    
   <router-outlet></router-outlet>

  `
})
export class Away {

}

@Component({
  selector: 'away-child',
  
  directives: [ROUTER_DIRECTIVES],
  template: `
    See you very soon!
    

  `
})
export class AwayChild {

}