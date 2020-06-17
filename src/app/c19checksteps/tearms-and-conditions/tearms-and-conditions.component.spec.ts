import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TearmsAndConditionsComponent } from './tearms-and-conditions.component';

describe('TearmsAndConditionsComponent', () => {
  let component: TearmsAndConditionsComponent;
  let fixture: ComponentFixture<TearmsAndConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TearmsAndConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TearmsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
