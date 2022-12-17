import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-boton-add',
  templateUrl: './boton-add.component.html',
  styleUrls: ['./boton-add.component.css']
})
export class BotonAddComponent implements OnInit {
  @Output() btnAddCLick = new EventEmitter();
  @Input() text: string ="";
  constructor() { }

  ngOnInit(): void {
  }
  onClickAdd(){
    this.btnAddCLick.emit();
  }
}
