import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cotizacion-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class CGestionComponent implements OnInit {

  public cotizaciones = [
    {
      cotizacion: 'W0690-2018',
      agencia: 'Nepo Keta',
      cliente: 'GUTIERREZ LEIVA, STEVE',
      vehiculo: 'BMW X1'
    },
    {
      cotizacion: 'W0687-2018',
      agencia: 'Nepo Keta',
      cliente: 'VIGO ROJAS, ROBERTO',
      vehiculo: 'Audi Q7'
    },
    {
      cotizacion: 'W0687-2018',
      agencia: 'Nepo Keta',
      cliente: 'GAMBONI , GIANCARLO',
      vehiculo: 'Kia Sorento'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
