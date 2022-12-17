import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-add-skill',
  templateUrl: './boton-add-skill.component.html',
  styleUrls: ['./boton-add-skill.component.css']
})
export class BotonAddSkillComponent implements OnInit {
  @Output() btnAddCLick = new EventEmitter();
  @Input() text: string ="";
  constructor() { }

  ngOnInit(): void {
  }
  onClickAdd(){
    this.btnAddCLick.emit();
  }
}
