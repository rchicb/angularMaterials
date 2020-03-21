import { Component, OnInit,ViewChild } from '@angular/core';
import { Usuario } from '../clases/usuarios/usuario';
import { ConsumoService } from '../servicios/consumo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'table-usuarios',
  templateUrl: './data-table-usuarios.component.html',
  styleUrls: ['./data-table-usuarios.component.css']
})
export class DataTableUsuariosComponent implements OnInit {

  headerDataTable:string[]=['salario','email','nombre','id','configuracion'];
  userList:Usuario[]=[];
  // dataSource:Usuario[]=[];
  dataSource:MatTableDataSource<Usuario>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private consumo:ConsumoService) { }

  ngOnInit(): void {

   
    this.consumo.getUsuarios().subscribe(
      datos=>{
        this.userList=datos;
        // this.dataSource=this.userList;
        this.dataSource=new MatTableDataSource<Usuario>(datos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
      }
    );
   
  }
  optionConfiguration(elemento){
    // alert(elemento);
    console.log(elemento);
  }

}
