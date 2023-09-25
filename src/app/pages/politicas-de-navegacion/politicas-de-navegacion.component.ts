import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-politicas-de-navegacion',
  templateUrl: './politicas-de-navegacion.component.html',
  styleUrls: ['./politicas-de-navegacion.component.css']
})
export class PoliticasDeNavegacionComponent  implements OnInit {
  politicasExternas = false;
  avisoDePrivacidad = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Método para manejar el cambio de estado del botón
  onPoliticasChange() {
    if (this.politicasExternas) {
      this.router.navigate(['/politicas-de-navegacion/politicas-externas-cursos-talleres']);
    } else {
      this.router.navigate(['/politicas-de-navegacion']);
    }
  }

  onAvisoPrivacidadChange() {
    if (this.avisoDePrivacidad) {
      this.router.navigate(['politicas-de-navegacion/aviso-de-privacidad']);
    } else {
      this.router.navigate(['/politicas-de-navegacion']);
    }
  }
}
