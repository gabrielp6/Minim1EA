import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { FarmacovigilanciaService } from '../services/farmacovigilancia.service';
import { UsuarioService } from '../services/usuario.service';
import { Farmacovigilancia } from '../models/farmacovigilancia';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  farmacovigilancias: Farmacovigilancia[];
  usuarios : Usuario[];

  constructor(private router: Router, private farmacovigilanciaService : FarmacovigilanciaService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.farmacovigilanciaService.getFarmacovigilancias().subscribe(data =>{
      this.farmacovigilancias = data;
      console.log(this.farmacovigilancias);
    })

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }
  

  nuevoFarmacovigilancia(){
    this.router.navigateByUrl('/nuevofarmacovigilancia');
  }

  nuevoUsuario(){
    this.router.navigateByUrl('/nuevousuario');
  }

}
