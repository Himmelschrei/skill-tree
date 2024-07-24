import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelpComponent } from '../help/help.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [CommonModule, RouterModule, HelpComponent, AppComponent, HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
