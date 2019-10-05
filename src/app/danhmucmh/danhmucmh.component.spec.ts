import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucmhComponent } from './danhmucmh.component';

describe('DanhmucmhComponent', () => {
  let component: DanhmucmhComponent;
  let fixture: ComponentFixture<DanhmucmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
