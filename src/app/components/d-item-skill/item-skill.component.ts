import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../Portfolio';
import { SKILL } from '../../mock-informacion';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {
  @Input() habilidad: Skill = SKILL[0];
  @Output() onDeleteSkill:EventEmitter<Skill>= new EventEmitter();
  color:string="orange";
  constructor(
    public loginPrd:UiService
  ) { }

  ngOnInit(): void {
  }
  onDelete(skill: Skill){
    this.onDeleteSkill.emit(skill);
  }
  obtenerColor(skill: Skill){
    if(skill.nivel=="Muy Bueno"){
      return this.color="rgb(7, 88, 7)";
    }else if(skill.nivel=="Bueno"){
      return this.color="green";
    }else if(skill.nivel=="Medio Bajo"){
      return this.color="rgb(18, 216, 18)";
    }else if(skill.nivel=="Medio"){
      return this.color="rgb(13, 153, 13)";
    }else{
      return this.color="orange";
    }
    return
  }

}
