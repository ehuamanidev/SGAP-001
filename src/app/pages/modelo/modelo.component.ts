import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

  public modelos = [
    {
      marca: 'Mark',
      modelo: '145',
      clasificacion: 'Hatchback'
    },
    {
      marca: 'Jacob',
      modelo: '146',
      clasificacion: 'Hatchback'
    },
    {
      marca: 'Alfa Romeo',
      modelo: '147',
      clasificacion: 'Hatchback'
    },
    {
      marca: 'Larry',
      modelo: '149',
      clasificacion: 'Hatchback'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
