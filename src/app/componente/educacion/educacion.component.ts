import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educationList:any;
  constructor (private datosPorfolio:PortfolioService){ }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.educationList=data.Educacion;
    })
  }

}
