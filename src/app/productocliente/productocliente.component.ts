import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productocliente',
  templateUrl: './productocliente.component.html',
  styleUrls: ['./productocliente.component.css']
})
export class ProductoclienteComponent implements OnInit {
  // @Output() pressagregar = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

  // clickAgregar(): void {
  //   console.log("se ha precionado el boton agregar.");
  //   this.pressagregar.emit();
  // }
}
