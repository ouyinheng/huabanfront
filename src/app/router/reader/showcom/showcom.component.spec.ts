import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcomComponent } from './showcom.component';

describe('ShowcomComponent', () => {
  let component: ShowcomComponent;
  let fixture: ComponentFixture<ShowcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
