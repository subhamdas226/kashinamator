import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScreenWrapperComponent } from './first-screen-wrapper.component';

describe('FirstScreenWrapperComponent', () => {
  let component: FirstScreenWrapperComponent;
  let fixture: ComponentFixture<FirstScreenWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstScreenWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstScreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
