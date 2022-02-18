import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PacientesElement{
  nome: string;
  medico: string;
  idade: number;
  email: string;
  planodesaude: string;
}

const ELEMENT_DATA: PacientesElement[] = [
  {nome: 'Fulano da Silva', medico: 'João Silva', idade: 80, email: 'fulano@gmail.com', planodesaude: 'SMedicina'},
  {nome: 'Beltrano Souza', medico: 'João Silva', idade: 50, email: 'beltrano@gmail.com', planodesaude: 'SMedicina'},
  {nome: 'Cicrano Santos', medico: 'Maria Souza', idade: 20, email: 'cicrano@gmail.com', planodesaude: 'InterMedicina'},
  {nome: 'Matheus da Silva', medico: 'João Silva', idade: 40, email: 'matheus@gmail.com', planodesaude: 'SMedicina'},
  {nome: 'Mariana da Silva', medico: 'Rita Silva', idade: 80, email: 'mariana@gmail.com', planodesaude: 'InterMedicina'}
]

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'medico', 'idade', 'email', 'planodesaude'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
