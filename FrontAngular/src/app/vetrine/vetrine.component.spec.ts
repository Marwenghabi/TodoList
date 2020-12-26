import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetrineComponent } from './vetrine.component';

describe('VetrineComponent', () => {
  let component: VetrineComponent;
  let fixture: ComponentFixture<VetrineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetrineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
