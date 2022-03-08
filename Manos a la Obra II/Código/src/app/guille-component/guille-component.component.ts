import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
//import { addListener } from 'process';
@Component({
  selector: 'app-guille-component',
  templateUrl: './guille-component.component.html',
  styleUrls: ['./guille-component.component.scss']
})
export class GuilleComponentComponent implements OnInit {
    tareas:any[]=[];
    agregarTarea(nombre:any){ 
      if(nombre.trim() === ''){//elimina espacios en blanco
        return
      }else{
        let tarea={
          nombre,
        } 
        this.tareas.unshift(tarea);//agrega al principio
      }
    }
    eliminarTarea(tarea:any){
      let index =this.tareas.indexOf(tarea);//busca la posicion y la devuelve
      console.log(index);
      if(index > -1){
        this.tareas.splice(index,1);
      }
    }
constructor(){}
  ngOnInit():void{
  }
}
interface Tarea{
  nombre : string
}