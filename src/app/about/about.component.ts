import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  clientes = []

  constructor() { }

  ngOnInit(): void {
    for (var i = 1; i < 5; i++) {
      this.clientes.push({
        id: ""+i,
        cliente: "nombre"+i,
        apellido: "apellido"+i,
        dinero: 123456*i,
        fecha: "0"+i+"/0"+i+"/2020",
        state:true,
        img:"../../assets/"+i+".jpg"
      });
    }
  }

}
