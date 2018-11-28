import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryChildComponent } from './dictionary-child.component';

describe('DictionaryChildComponent', () => {
  let component: DictionaryChildComponent;
  let fixture: ComponentFixture<DictionaryChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
