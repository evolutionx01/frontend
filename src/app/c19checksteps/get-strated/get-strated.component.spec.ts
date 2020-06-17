import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStratedComponent } from './get-strated.component';

describe('GetStratedComponent', () => {
  let component: GetStratedComponent;
  let fixture: ComponentFixture<GetStratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
