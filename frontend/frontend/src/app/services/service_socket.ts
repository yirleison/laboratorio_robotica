import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export class Socket_prueba {
    private url = 'http://localhost:3767';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public prueba(message) {
        this.socket.emit('new_message', message);
    }

     public getMessages = ()=>{
         
      return Observable.create((observer)=>{
        this.socket.on('new_message',(data)=>{
            observer.next(data);
        });
      });
    }

}