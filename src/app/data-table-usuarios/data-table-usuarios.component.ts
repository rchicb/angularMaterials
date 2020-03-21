import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuarios/usuario';
import { ConsumoService } from '../servicios/consumo.service';


@Component({
  selector: 'table-usuarios',
  templateUrl: './data-table-usuarios.component.html',
  styleUrls: ['./data-table-usuarios.component.css']
})
export class DataTableUsuariosComponent implements OnInit {

  headerDataTable:string[]=['salario','email','nombre','id'];
  userList:Usuario[]=[];
  dataSource:Usuario[]=[];

  constructor(private consumo:ConsumoService) { }

  ngOnInit(): void {
    this.consumo.getUsuarios().subscribe(
      datos=>{
        this.userList=datos;
        this.dataSource=this.userList;
      }
    );
  }

}
