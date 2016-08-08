import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './home';
import {Away, AwayChild} from './away';
import {PageNotFound} from './notfound';

import {Title} from '@angular/platform-browser';

const routes: RouterConfig = [
  { 
    path: '',
    component: Home,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'away',
    children: [
    {
      path: '',
      component: Away,
      data: {
        title: 'Away-Main'
      }
    {
      path: 'child',
      component: AwayChild,
      data: {
        title: 'Away-Child'
      }
    ],
    data: {
      title: 'Away'
    }
  },
  {
    path: '**',
    component: PageNotFound,
    data: {
      title: '404: Page Not Found'
    }
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  Title
];