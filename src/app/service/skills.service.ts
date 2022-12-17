import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Skill } from '../Portfolio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  private apiUrl= 'http://localhost:5000/misSkills'
  constructor(
    private http: HttpClient
  ) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl)
  }
  
  deleteSkill(skill:Skill): Observable<Skill>{
    const url = `${this.apiUrl}/${skill.id}` //importante respetar que las comillas sean las inclinadas
    return this.http.delete<Skill>(url)
  }
  addSkill(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl, skill, httpOptions);
  }



}
