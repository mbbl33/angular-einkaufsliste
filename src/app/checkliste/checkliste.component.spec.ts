import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklisteComponent } from './checkliste.component';

describe('ChecklisteComponent', () => {
  let component: ChecklisteComponent;
  let fixture: ComponentFixture<ChecklisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklisteComponent]
    });
    fixture = TestBed.createComponent(ChecklisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
