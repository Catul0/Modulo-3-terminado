import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddProyect: boolean=false;
  private showAddInfo: boolean=false;
  private subject = new Subject<any>();
  private subject1 = new Subject<any>()
  private showAddSkill: boolean=false;
  private subject2 = new Subject<any>();
  public ingresar:boolean=false;
  variable:boolean=false;
  constructor() { }
  
  toggleAddProyect():void{
    this.showAddProyect = !this.showAddProyect;
    this.subject.next(this.showAddProyect);
  }
  onToggle():Observable<any>{
    return this.subject.asObservable();
 }
  toggleAddInfo():void{
    this.showAddInfo = !this.showAddInfo;
    this.subject1.next(this.showAddInfo);
  }
  onToggleInfo():Observable<any>{
    return this.subject1.asObservable();
 }

 toggleAddSkill():void{
  this.showAddSkill = !this.showAddSkill;
  this.subject2.next(this.showAddSkill);
}
 onToggleSkill():Observable<any>{
  return this.subject2.asObservable();
}


 public ingresarAplicativo(obj:any):boolean{
  this.ingresar=obj.usuario== 'catulo' && obj.password== 'admin1005';
  this.variable=this.ingresar;
  return this.ingresar;
 }
 public habilitarLogeo(){
  return this.ingresar;
 }
 public logout(){
  this.variable=!this.ingresar;
  if(this.showAddInfo==true){
    this.toggleAddInfo();
  }
  if(this.showAddProyect){
    this.toggleAddProyect();
  }
  if(this.showAddSkill){
  this.toggleAddSkill();
  }
  return !this.ingresar;
 }

}
