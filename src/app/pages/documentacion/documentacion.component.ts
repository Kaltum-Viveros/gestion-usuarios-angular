import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.scss']
})
export class DocumentacionComponent {
  tecnologias = [
    { nombre: 'NodeJS', img: 'assets/nodejs.png' },
    { nombre: 'TypeScript', img: 'assets/typescript.png' },
    { nombre: 'Angular', img: 'assets/angular.png' },
    { nombre: 'Ionic', img: 'assets/ionic.png' },
    { nombre: 'NPM', img: 'assets/npm.png' }
  ];
}
