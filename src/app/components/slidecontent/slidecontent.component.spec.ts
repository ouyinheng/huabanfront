import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidecontentComponent } from './slidecontent.component';

describe('SlidecontentComponent', () => {
  let component: SlidecontentComponent;
  let fixture: ComponentFixture<SlidecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
