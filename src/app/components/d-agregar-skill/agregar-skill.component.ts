import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Skill } from '../../Portfolio';
import { UiService } from '../../service/ui.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();
  subscription?: Subscription;
  id: number=0;
  titulo: string="";
  texto: string="";
  nivel: string="No especificado";
  showAddSkill: boolean=false;
  constructor(
    private uiServise: UiService
  ) {
    this.subscription = this.uiServise.onToggleSkill().subscribe(value => this.showAddSkill = value)
   }

  ngOnInit(): void {
  }
  tomarNivelBajo(){
    this.nivel="Medio Bajo";
  }
  tomarNivelMedio(){
    this.nivel="Medio";
  }
  tomarNivelBueno(){
    this.nivel="Bueno";
  }
  tomarNivelMuyBueno(){
    this.nivel="Muy Bueno";
  }
  onSubmit(){
    if(!this.titulo){
      alert("Por favor añade un nombre");
      return
    }
    if(!this.texto){
      alert("Por favor añade una breve descripcion");
      return
    }
    const {id,titulo,texto,nivel} = this
    const newSkill = {id,titulo,texto,nivel}

    this.onAddSkill.emit(newSkill);
  }

}
