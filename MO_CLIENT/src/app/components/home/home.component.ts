import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from '../planner/planner.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, PlannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
