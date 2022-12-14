import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public xd:UiService) { }

  ngOnInit(): void {
  }

  abrirMenu(){
    console.log("funciona!")
  }
}
