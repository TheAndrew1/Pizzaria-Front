import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborListComponent } from './sabor-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaborListComponent', () => {
  let component: SaborListComponent;
  let fixture: ComponentFixture<SaborListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaborListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
