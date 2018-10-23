import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthorComponent } from './anthor.component';

describe('AnthorComponent', () => {
  let component: AnthorComponent;
  let fixture: ComponentFixture<AnthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
