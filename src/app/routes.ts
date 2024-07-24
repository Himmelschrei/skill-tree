import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Main Page' },
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { title: 'Help' },
  },
];

export default routeConfig;
