import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';

const routeConfig: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Main Page' },
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { title: 'Help' },
  },
];

export default routeConfig;
