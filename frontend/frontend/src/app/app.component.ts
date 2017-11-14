import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Socket_prueba } from './services/service_socket';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Socket_prueba]
})

export class AppComponent {

  title = 'Aprendiendo a programar Robots con Angular && Node js';
  private url = 'http://localhost:3767';
  public datos:any;
  public tempera:any;

  constructor(
    private socket: Socket_prueba
  ){}

  ngOnInit(){
   this.socket.prueba(1);
   this.get_temperatura();
  }

  get_temperatura(){
    this.socket.getMessages().subscribe(data =>{
      this.tempera = data;
    });
    
  }
}
