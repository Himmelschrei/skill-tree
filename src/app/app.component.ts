import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
// import { HelpComponent } from './help/help.component';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'skill-tree';
}
