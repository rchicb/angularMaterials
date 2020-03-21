import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../clases/usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  urlApi:string="http://127.0.0.1:8000/api/usuarios";
  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.urlApi).pipe(
      map(datos=>{
          return datos;
      })
    );
  }
}
