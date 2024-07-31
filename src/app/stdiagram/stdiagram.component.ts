import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
export class StDiagramComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  public skills: Skill[];
  public relationships: Relationship[];

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private scrollLeft = 0;
  private scrollTop = 0;

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

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.startY = event.pageY - this.scrollContainer.nativeElement.offsetTop;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollTop = this.scrollContainer.nativeElement.scrollTop;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const y = event.pageY - this.scrollContainer.nativeElement.offsetTop;
    const walkX = (x - this.startX) * 1; // Scroll speed in X direction
    const walkY = (y - this.startY) * 1; // Scroll speed in Y direction
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walkX;
    this.scrollContainer.nativeElement.scrollTop = this.scrollTop - walkY;
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onStopDragging() {
    this.isDragging = false;
  }

  ngAfterViewInit() {
    // Optional: Add global event listeners to handle dragging when leaving the element
    window.addEventListener('mouseup', () => this.onStopDragging());
    window.addEventListener('mouseleave', () => this.onStopDragging());
  }
}
