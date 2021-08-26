import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRdvComponent } from './validationRdv.component';

describe('ValidationRdvComponent', () => {
  let component: ValidationRdvComponent;
  let fixture: ComponentFixture<ValidationRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
