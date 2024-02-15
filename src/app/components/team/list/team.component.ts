import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscriber } from 'app/shared/unsubscriber/unsubscriber';
import { TeamService } from 'app/services';
import { TeamCardComponent } from '..';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit, OnDestroy {
  private subs = new Unsubscriber();

  items: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.subs.addSub = this.teamService.getTeamList().subscribe(
      (res: any) => {
        this.items = res;
      },
      (err: any) => {
        console.log('@@@:' + JSON.stringify(err));
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
