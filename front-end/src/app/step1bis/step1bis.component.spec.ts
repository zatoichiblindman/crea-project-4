import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1bisComponent } from './step1bis.component';

describe('Step1bisComponent', () => {
  let component: Step1bisComponent;
  let fixture: ComponentFixture<Step1bisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1bisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
