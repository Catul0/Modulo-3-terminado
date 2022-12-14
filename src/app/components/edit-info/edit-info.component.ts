import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Info } from '../../Portfolio';
import { UiService } from '../../service/ui.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  @Output() onEditInfo: EventEmitter<Info> = new EventEmitter();
  subscription?: Subscription;
  showAddInfo: boolean=false;
  id: number=0;
  titulo: string="";
  texto: string="";
  constructor(
    private uiServise: UiService,
    public loginPrd:UiService
  ) { 
    this.subscription = this.uiServise.onToggleInfo().subscribe(value => this.showAddInfo = value)
  }

  ngOnInit(): void {
  }
  onGuardar(){
    if(!this.titulo){
      alert("Por favor añade un nombre");
      return
    }
    if(!this.texto){
      alert("Por favor añade una descrpicion del proyecto");
      return
    }
    const {id,titulo,texto} = this
    const newInfo = {id,titulo,texto}
    this.onEditInfo.emit(newInfo);
  }

  nuevosDatos(datos:Info){
    console.log(datos)
  }
}
