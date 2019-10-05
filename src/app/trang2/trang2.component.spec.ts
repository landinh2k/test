import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trang2Component } from './trang2.component';

describe('Trang2Component', () => {
  let component: Trang2Component;
  let fixture: ComponentFixture<Trang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
