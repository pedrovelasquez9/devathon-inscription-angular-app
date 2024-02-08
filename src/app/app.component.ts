import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamComponent } from './components/team/list/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

const COMPONENTS: any[] = [
  ContentComponent,
  FooterComponent,
  HeaderComponent,
  TeamComponent,
];

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
