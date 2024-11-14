import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Usuario} from "../../models/usuario";
import {UsuariosService} from "../../services/usuarios.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

const ELEMENT_DATA: Usuario[] = [
  {id: 1, username: 'Hydrogen', email: 'alice@gmail.com', bloqueado: false}];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  displayedColumns: string[] = ['id', 'username', 'email', 'bloqueado', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  listaDeUsuarios: Usuario[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private usuarioService: UsuariosService, matPaginator: MatPaginator, matSort: MatSort) {
    this.dataSource = new MatTableDataSource<Usuario>(this.listaDeUsuarios);
    this.paginator = matPaginator;
    this.sort = matSort;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.listarUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: responseUsuarios => {
        console.log('next: ', responseUsuarios);
        this.listaDeUsuarios = responseUsuarios;
        this.dataSource = new MatTableDataSource<Usuario>(this.listaDeUsuarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: mensagemDeErro => {
        console.log('error: ', mensagemDeErro);
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
