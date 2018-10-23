import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuabanComponent } from './huaban.component';

describe('HuabanComponent', () => {
  let component: HuabanComponent;
  let fixture: ComponentFixture<HuabanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuabanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
