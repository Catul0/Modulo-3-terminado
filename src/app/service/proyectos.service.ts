import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto, Info} from '../Portfolio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl= 'http://localhost:5000/misProyectos'
  
  constructor(
    private http: HttpClient
  ) { }

  getProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl)
  }
  
  deleteProyect(proyecto:Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/${proyecto.id}` //importante respetar que las comillas sean las inclinadas
    return this.http.delete<Proyecto>(url)
  }
  addProyect(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl, proyecto, httpOptions);
  }
}
