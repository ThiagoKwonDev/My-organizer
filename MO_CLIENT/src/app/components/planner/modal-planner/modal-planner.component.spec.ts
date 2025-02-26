import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlannerComponent } from './modal-planner.component';

describe('ModalPlannerComponent', () => {
  let component: ModalPlannerComponent;
  let fixture: ComponentFixture<ModalPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
