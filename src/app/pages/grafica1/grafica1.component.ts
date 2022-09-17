import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1 = {
    labels: this.labels1,
    datasets: [
      { 
        data: [ 10, 15, 40 ],
        backgroundColor:['#6857E6','#009FEE','#F02059'],
        hoverBackgroundColor:['#6857E6','#009FEE','#F02059'],
        hoverBorderColor:['#6857E6','#009FEE','#F02059']
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
