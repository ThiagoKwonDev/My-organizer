import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../../services/planner.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalPlannerComponent } from './modal-planner/modal-planner.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];
  dataSource = [
    { id: 1, nome: 'João', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' },
    { id: 3, nome: 'Carlos', email: 'carlos@example.com' }
  ];
  constructor(public dialog: MatDialog, private plannerService: PlannerService) { }

  ngOnInit(): void {
    this.plannerService.getPlanner().subscribe(res => {
      console.log(res.body)

    })
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalPlannerComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
