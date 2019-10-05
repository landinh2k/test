import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThitnComponent } from './thitn.component';

describe('ThitnComponent', () => {
  let component: ThitnComponent;
  let fixture: ComponentFixture<ThitnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThitnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThitnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
