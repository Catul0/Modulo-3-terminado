import { Component, OnInit } from '@angular/core';
import { Info } from '../../Portfolio';
import { InfoService } from '../../service/info.service';
import { UiService } from '../../service/ui.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-targeta-informacion',
  templateUrl: './targeta-informacion.component.html',
  styleUrls: ['./targeta-informacion.component.css']
})
export class TargetaInformacionComponent implements OnInit {
  info: Info[] = [];
  showAddInfo: boolean=false;
  subscription?: Subscription;
  constructor(
    private infoService: InfoService,
    private uiServise: UiService,
    public loginPrd:UiService

  ) { 
    this.subscription = this.uiServise.onToggleInfo().subscribe(value => this.showAddInfo = value)
  }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe( info =>
      this.info = info
    );
  }
  onEdit(info: Info){
    this.infoService.updateInfo(info).subscribe((inf)=>(
      this.info.push(inf)
    ))
  }
  deleteInfo( info: Info){
    this.infoService.deleteInfoo(info)
    .subscribe(
        ()=> {
      this.info = this.info.filter( (t) =>{
        return t.id !== info.id
      })
    })
  }
  abrirAgregarInfo(){
    this.uiServise.toggleAddInfo();
  }
}
