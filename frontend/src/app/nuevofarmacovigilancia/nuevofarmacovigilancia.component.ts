import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmacovigilanciaService } from '../services/farmacovigilancia.service';

@Component({
  selector: 'app-nuevofarmacovigilancia',
  templateUrl: './nuevofarmacovigilancia.component.html',
  styleUrls: ['./nuevofarmacovigilancia.component.css']
})
export class NuevofarmacovigilanciaComponent implements OnInit {

  farmacovigilanciaForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private farmacovigilanciaService: FarmacovigilanciaService, private router: Router) { }

  ngOnInit(): void {
    this.farmacovigilanciaForm = this.formBuilder.group({
      idPersona: ['', [Validators.required, Validators.nullValidator]], 
      persona: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]],
      dni: ['', [Validators.required, Validators.nullValidator]],
      telefono: ['', [Validators.required, Validators.nullValidator]],
      fiebre: ['', [Validators.required, Validators.nullValidator]],
      tos: ['', [Validators.required, Validators.nullValidator]],
      dificultad: ['', [Validators.required, Validators.nullValidator]],
      malestar: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.farmacovigilanciaForm.controls;
  }

  addfarmacovigilancia(): void{
    if(this.farmacovigilanciaForm.invalid){
      return;
    }
    const idPersona = this.farmacovigilanciaForm.value.idPersona;
    const persona = this.farmacovigilanciaForm.value.persona;
    const fecha = this.farmacovigilanciaForm.value.fecha;
    const dni = this.farmacovigilanciaForm.value.dni;
    const telefono = this.farmacovigilanciaForm.value.telefono;
    const fiebre = this.farmacovigilanciaForm.value.fiebre;
    const tos = this.farmacovigilanciaForm.value.tos;
    const dificultad = this.farmacovigilanciaForm.value.dificultad;
    const malestar = this.farmacovigilanciaForm.value.malestar;


    const farmacovigilancia = {'idPersona': idPersona, 'persona': persona, 'fecha': fecha, 'dni': dni, 'telefono': telefono, 'fiebre': fiebre, 'tos': tos, 'dificultad': dificultad, 'malestar': malestar};
    this.farmacovigilanciaService.addFarmacovigilancia(farmacovigilancia).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
