import { Component, OnInit } from '@angular/core';
import { Jugadores } from './_interfaces/jugadores.interface';

import * as JUGADORES from './../assets/data/jugadores.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoTarea';

  jugadores: Jugadores[] = [];
  mostrar=true;

  ngOnInit(){
    this.jugadores =(JUGADORES as any).default;

    console.log(this.jugadores)
  }

  
}


