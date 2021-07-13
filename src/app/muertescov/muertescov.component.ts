import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-muertes-covid',
  templateUrl: './muertescov.component.html',
  styleUrls: ['./muertescov.component.css']
})
export class MuertesCovidComponent implements OnInit {
  public listamuertesCovid : any = []
  public datosPais : any = {
    nombres:'',
    ciudad:'',
    sexo:0,
    peso : '',
    data:[]
  }
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.Get_muertes_Covis()
  }

  public Get_muertes_Covis(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Ecuador&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais.nombre = resp.All.country
        this.datosPais.ciudad = resp.All.ciudad_city
        this.datosPais.sexo = resp.All.sexo
        this.datosPais.peso= resp.All.peso
        this.datosPais.data = resp.All.dates
    })

  }

}
