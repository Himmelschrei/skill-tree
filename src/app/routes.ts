import { Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { StFrameComponent } from './stframe/stframe.component';

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
  {
    path: 'skill-tree',
    component: StFrameComponent,
    data: { title: 'Skill Tree' },
  },
];

export default routeConfig;
