import { Component } from '@angular/core';
import { UsuariosService } from '../../core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: any[] = [];
  loading = true;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    setTimeout(() => {
      this.usuariosService.getUsuarios().subscribe(data => {
        this.usuarios = data;
        this.loading = false;
      });
    }, 5000);
  }

}

