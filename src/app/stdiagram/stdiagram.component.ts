import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import skills from '../../assets/data/skills.json';
import { Skill } from '../skill';

@Component({
  selector: 'stdiagram-component',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './stdiagram.component.html',
  styleUrl: './stdiagram.component.css',
})
export class StDiagramComponent {
  public skills: Skill[];

  constructor() {
    this.skills = skills.skillData as Skill[];
  }
}
