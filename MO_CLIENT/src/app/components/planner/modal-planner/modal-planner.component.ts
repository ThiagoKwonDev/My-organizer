import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlannerService } from '../../../services/planner.service';
import { Planner } from '../../../dtos/planner.dto';

@Component({
  selector: 'app-modal-planner',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modal-planner.component.html',
  styleUrl: './modal-planner.component.scss'
})
export class ModalPlannerComponent {

  form: FormGroup;
  planner = new Planner();

  constructor(public dialogRef: MatDialogRef<ModalPlannerComponent>, private fb: FormBuilder) {
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
      this.planner.title = this.form.get('name')?.value;
      this.planner.expanse_value = parseFloat(this.form.get('value')?.value);
      this.planner.expire_date = this.form.get('finalDate')?.value;
      console.log(this.planner)
      // this.plannerService.createPlanner(this.planner).subscribe(res => {
      //   console.log(res.body)
      // })
      //this.dialogRef.close();
    } else {
    }
  }

  close(): void {
    this.dialogRef.close();
  }
  teste() {
    let teste = new Planner();
    teste.id = 1;
    teste.title = "teste";
    teste.expanse_value = 12;
    teste.expire_date = "2025-02-06";
    // this.plannerService.createPlanner(teste).subscribe(res => {
    //   console.log(res.body)
    // })
  }
}
