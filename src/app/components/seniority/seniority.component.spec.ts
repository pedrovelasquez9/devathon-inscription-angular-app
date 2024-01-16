import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorityComponent } from './seniority.component';

describe('SeniorityComponent', () => {
  let component: SeniorityComponent;
  let fixture: ComponentFixture<SeniorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeniorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
