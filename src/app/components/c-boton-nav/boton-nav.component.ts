import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-nav',
  templateUrl: './boton-nav.component.html',
  styleUrls: ['./boton-nav.component.css']
})
export class BotonNavComponent implements OnInit {
  @Output() btnNavCLick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnNavCLick.emit();
  }
}
