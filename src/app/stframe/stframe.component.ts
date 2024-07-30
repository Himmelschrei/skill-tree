import { Component } from '@angular/core';
import { StDiagramComponent } from '../stdiagram/stdiagram.component';

@Component({
  selector: 'stframe-component',
  standalone: true,
  imports: [StDiagramComponent],
  templateUrl: './stframe.component.html',
  styleUrl: './stframe.component.css',
})
export class StFrameComponent {}
