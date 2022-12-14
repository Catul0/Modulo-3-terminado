import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public exit:UiService) { }

  ngOnInit(): void {
  }

  salir(){
    this.exit.logout();
    return
  }
}
