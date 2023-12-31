import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDetailsComponent } from './funcionario-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FuncionarioDetailsComponent', () => {
  let component: FuncionarioDetailsComponent;
  let fixture: ComponentFixture<FuncionarioDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
