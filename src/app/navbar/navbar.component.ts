import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelpComponent } from '../help/help.component';
import { HomeComponent } from '../home/home.component';
import { StFrameComponent } from '../stframe/stframe.component';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [CommonModule, RouterModule, HelpComponent, AppComponent, HomeComponent, StFrameComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
