import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.scss']
})
export class EstructurasComponent {
  mostrar = true;
  items = ['Angular', 'TypeScript', 'NodeJS', 'Ionic'];
  opcion = 3;
}
