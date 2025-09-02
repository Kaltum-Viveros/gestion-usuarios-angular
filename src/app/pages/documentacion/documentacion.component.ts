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

  activeIndex = 0;

  prev() {
    this.activeIndex = (this.activeIndex === 0) ? this.tecnologias.length - 1 : this.activeIndex - 1;
  }

  next() {
    this.activeIndex = (this.activeIndex === this.tecnologias.length - 1) ? 0 : this.activeIndex + 1;
  }
}