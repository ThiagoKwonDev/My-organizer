import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlannerService } from '../../../services/planner.service';
import { Planner } from '../../../dtos/planner.dto';

@Component({
  selector: 'app-modal-planner',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modal-planner.component.html',
  styleUrl: './modal-planner.component.scss'
})
export class ModalPlannerComponent {

  form: FormGroup;
  planner = new Planner();

  constructor(public dialogRef: MatDialogRef<ModalPlannerComponent>, private fb: FormBuilder, private plannerService: PlannerService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      value: ['', [Validators.required, Validators.pattern('^[0-9]*\.?[0-9]{0,2}$')]],
      finalDate: ['', Validators.required]
    });
  }

  formatValue(event: any) {
    let value = event.target.value;
    value = value.replace(/[^\d.]/g, '');
    const [integer, decimal] = value.split('.');
    if (decimal && decimal.length > 2) {
      value = `${integer}.${decimal.substring(0, 2)}`;
    }
    event.target.value = value;
    this.form.get('value')?.setValue(value);
  }

  save() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched();
      control?.updateValueAndValidity();
    });
    if (this.form.valid) {
      this.planner.name = this.form.get('name')?.value;
      this.planner.value = parseFloat(this.form.get('value')?.value);
      this.planner.final_date = this.form.get('finalDate')?.value;
      this.plannerService.createPlanner(this.planner).subscribe(res => {
        if (res) {
          this.dialogRef.close();

        }
      })
    } else {
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
