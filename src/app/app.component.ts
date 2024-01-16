import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Unsubscriber } from './shared/unsubscriber/unsubscriber';
import { SeniorityService } from './services';
import { TeamComponent } from './components/team/list/team/team.component';
import { SeniorityComponent } from './components/seniority/seniority.component';
import { RolesComponent } from './components/roles/roles.component';

const COMPONENTS: any[] = [TeamComponent, SeniorityComponent, RolesComponent];

const MODULES: any[] = [CommonModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MODULES, COMPONENTS, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devathon-inscription-angular-app';
}
