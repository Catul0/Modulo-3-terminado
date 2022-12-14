import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Proyecto} from '../../Portfolio';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider: Proyecto[] = [];
  carrusel:any;
  constructor(private proyectosService:ProyectosService) { }

ngOnInit(): void {
  this.proyectosService.getProyecto().subscribe( proyectos =>
    this.slider = proyectos
  );
}
  
}
