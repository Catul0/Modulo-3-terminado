import { Component, OnInit } from '@angular/core';
import { Skill } from '../../Portfolio';
import { SkillsService } from '../../service/skills.service';
import { Subscription }  from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-targeta-skills',
  templateUrl: './targeta-skills.component.html',
  styleUrls: ['./targeta-skills.component.css']
})
export class TargetaSkillsComponent implements OnInit {
  habilidades: Skill[]=[];
  showAddSkill: boolean=false;
  subscription?: Subscription;
  constructor(
    private uiServise:UiService,
    private skillsService:SkillsService,
    public loginPrd:UiService
  ) { 
    this.subscription = this.uiServise.onToggleSkill().subscribe(value => this.showAddSkill = value)
  }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe( habilidades =>
      this.habilidades = habilidades
    );
  }
  addSkill(skill: Skill){
    this.skillsService.addSkill(skill).subscribe((skill)=>(
      this.habilidades.push(skill)
    ))
  }
  abrirAgregarSkill(){
    this.uiServise.toggleAddSkill();
  }
  deleteSkill( skill: Skill){
    this.skillsService.deleteSkill(skill)
    .subscribe(
        ()=> {
      this.habilidades = this.habilidades.filter( (t) =>{
        return t.id !== skill.id
      })
    })
  }

}
