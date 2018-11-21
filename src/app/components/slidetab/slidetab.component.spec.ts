import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetabComponent } from './slidetab.component';

describe('SlidetabComponent', () => {
  let component: SlidetabComponent;
  let fixture: ComponentFixture<SlidetabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidetabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
