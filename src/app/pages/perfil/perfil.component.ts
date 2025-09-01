import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '555-123-4567',
    direccion: 'Calle Falsa 123, Ciudad',
    nacimiento: '1995-06-15'
  };
}
