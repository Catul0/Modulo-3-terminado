import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-boton-add-info',
  templateUrl: './boton-add-info.component.html',
  styleUrls: ['./boton-add-info.component.css']
})
export class BotonAddInfoComponent implements OnInit {
  @Output() btnAddInfoCLick = new EventEmitter();
  @Input() text: string ="";
  constructor(
    public loginPrd:UiService
  ) { }

  ngOnInit(): void {
  }
  onClickAddInfo(){
    this.btnAddInfoCLick.emit();
  }
}
