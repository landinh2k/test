import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoitaikhoanComponent } from './doitaikhoan.component';

describe('DoitaikhoanComponent', () => {
  let component: DoitaikhoanComponent;
  let fixture: ComponentFixture<DoitaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoitaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoitaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
