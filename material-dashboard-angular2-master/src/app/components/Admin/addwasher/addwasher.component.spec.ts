import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwasherComponent } from './addwasher.component';

describe('AddwasherComponent', () => {
  let component: AddwasherComponent;
  let fixture: ComponentFixture<AddwasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddwasherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
