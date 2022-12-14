import { Component, OnInit } from '@angular/core';
import { Portada } from '../../Portfolio';
import { PORTADA } from '../../mock-informacion';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  portadaa: Portada[]=PORTADA;
  constructor() { }

  ngOnInit(): void {
  }

}
