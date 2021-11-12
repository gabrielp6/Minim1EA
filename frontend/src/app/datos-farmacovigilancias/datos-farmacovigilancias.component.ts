import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Farmacovigilancia } from '../models/farmacovigilancia';

@Component({
  selector: 'app-datos-farmacovigilancias',
  templateUrl: './datos-farmacovigilancias.component.html',
  styleUrls: ['./datos-farmacovigilancias.component.css']
})
export class DatosFarmacovigilanciasComponent implements OnInit {

  @Input()
  farmacovigilancia: Farmacovigilancia;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

}
