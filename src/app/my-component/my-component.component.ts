import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../product.service";

@Component({ //Isso indica que essa classe é um componente.
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  drinks: Observable<string[]> = new Observable<string[]>()

  //Estamos utilizando a injeção de dependências.
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
