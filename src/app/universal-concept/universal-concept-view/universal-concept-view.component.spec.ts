import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalConceptViewComponent } from './universal-concept-view.component';

describe('UniversalConceptViewComponent', () => {
  let component: UniversalConceptViewComponent;
  let fixture: ComponentFixture<UniversalConceptViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalConceptViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalConceptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
