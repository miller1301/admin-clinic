import { Component, Input, OnInit } from '@angular/core';
// NgChart
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() titulo?: string;
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() data?: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ],
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
