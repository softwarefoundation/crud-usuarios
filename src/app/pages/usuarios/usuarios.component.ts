import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Usuario} from "../../models/usuario";

const ELEMENT_DATA: Usuario[] = [
  {id: 1, username: 'Hydrogen', email: 'alice@gmail.com', bloqueado: false}];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  displayedColumns: string[] = ['id', 'username', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
