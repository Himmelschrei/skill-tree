import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import skills from '../../assets/data/skills.json';
import { Relationship } from '../relationship';
import { Skill } from '../skill';

@Component({
  selector: 'stdiagram-component',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './stdiagram.component.html',
  styleUrls: ['./stdiagram.component.css'],
})
export class StDiagramComponent {
  public skills: Skill[];
  public relationships: Relationship[];

  constructor() {
    this.skills = skills.skillData as Skill[];
    this.relationships = skills.relationships as Relationship[];
  }

  public GetSkill(id: number): Skill | null {
    return this.skills.find((sk) => sk.id === id) || null;
  }

  public getSkillPosition(id: number) {
    const skill = this.GetSkill(id);
    return skill ? { x: skill.xpos, y: skill.ypos } : { x: 0, y: 0 };
  }
}
