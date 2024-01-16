import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeniorityService } from 'app/services';
import { Unsubscriber } from 'app/shared/unsubscriber/unsubscriber';

@Component({
  selector: 'app-seniority',
  standalone: true,
  imports: [],
  templateUrl: './seniority.component.html',
  styleUrl: './seniority.component.scss',
})
export class SeniorityComponent implements OnInit, OnDestroy {
  private subs = new Unsubscriber();

  constructor(private seniorityService: SeniorityService) {}

  ngOnInit(): void {
    this.subs.addSub = this.seniorityService
      .getSeniorityList()
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
