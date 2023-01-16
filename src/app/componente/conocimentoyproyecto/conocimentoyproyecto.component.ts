import { Component,OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-conocimentoyproyecto',
  templateUrl: './conocimentoyproyecto.component.html',
  styleUrls: ['./conocimentoyproyecto.component.css']
})
export class ConocimentoyproyectoComponent implements OnInit {
  miPortafolio:any
  constructor(private datosProfolio:PortfolioService){ }
  ngOnInit(): void {
    this.datosProfolio.obtenerDatos().subscribe(data=>{
      console.log(data)
      this.miPortafolio=data;
    });
  }

}
