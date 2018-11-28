import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivedTimeComponent } from './lived-time.component';

describe('LivedTimeComponent', () => {
  let component: LivedTimeComponent;
  let fixture: ComponentFixture<LivedTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivedTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
