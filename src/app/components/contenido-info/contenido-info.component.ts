import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Info} from '../../Portfolio';
import { INFORMACION } from '../../mock-informacion';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-contenido-info',
  templateUrl: './contenido-info.component.html',
  styleUrls: ['./contenido-info.component.css']
})
export class ContenidoInfoComponent implements OnInit {
  @Input() inf: Info= INFORMACION[0];
  @Output() onDeleteInformacion: EventEmitter<Info> = new EventEmitter();
  constructor(
    public loginPrd:UiService
  ) { }

  ngOnInit(): void {
  }
  onDeleteInfo(info:Info){
    this.onDeleteInformacion.emit(info);

  }

}
