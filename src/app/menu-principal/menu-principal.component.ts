import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  // @Input() elementos: ProductoclienteComponent[] = [];
  // seleccionados: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Seleccionar(): void {
  //   this.seleccionados++;
  // }
}
