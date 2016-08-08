//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {APP_ROUTER_PROVIDERS} from './app.routes';

bootstrap(App, [
  APP_ROUTER_PROVIDERS
]);