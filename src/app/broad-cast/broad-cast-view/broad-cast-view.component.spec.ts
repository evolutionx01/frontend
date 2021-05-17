import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadCastViewComponent } from './broad-cast-view.component';

describe('BroadCastViewComponent', () => {
  let component: BroadCastViewComponent;
  let fixture: ComponentFixture<BroadCastViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadCastViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadCastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
