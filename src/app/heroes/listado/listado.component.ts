import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor', 'Capitán América'];
  heroeBorrado:string='';

  borrarHeroe():void {
    this.heroeBorrado=this.heroes.pop() || '';
  }
}
