import { Component } from '@angular/core';
import { TeamComponent } from '../team/list/team.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TeamComponent],
  templateUrl: './content.component.html',
  providers: [],
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
