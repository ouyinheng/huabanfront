import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OinputComponent } from './oinput.component';

describe('OinputComponent', () => {
  let component: OinputComponent;
  let fixture: ComponentFixture<OinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
