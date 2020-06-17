import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpOneComponent } from './setp-one.component';

describe('SetpOneComponent', () => {
  let component: SetpOneComponent;
  let fixture: ComponentFixture<SetpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
