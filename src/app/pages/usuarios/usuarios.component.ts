import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  loading = true;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    // Simulamos una espera de 5 segundos antes de mostrar los datos
    setTimeout(() => {
      this.usuariosService.getUsuarios().subscribe({
        next: (data) => {
          this.usuarios = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al obtener usuarios:', err);
          this.loading = false;
        }
      });
    }, 5000);
  }
}
