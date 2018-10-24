import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploresComponent } from './explores.component';

describe('ExploresComponent', () => {
  let component: ExploresComponent;
  let fixture: ComponentFixture<ExploresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
