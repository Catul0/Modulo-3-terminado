import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../Portfolio';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://localhost:5000/sobreMi'
  

  constructor(
    private http: HttpClient
  ) { }


  getInformacion(): Observable<Info[]>{
    return this.http.get<Info[]>(this.apiUrl)
  }

  updateInfo(info: Info): Observable<Info>{
    return this.http.post<Info>(this.apiUrl, info, httpOptions);
  }

  deleteInfoo(info:Info): Observable<Info>{
    const url = `${this.apiUrl}/${info.id}` //importante respetar que las comillas sean las inclinadas
    return this.http.delete<Info>(url)
  }
  
}


