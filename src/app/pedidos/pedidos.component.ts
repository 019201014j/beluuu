import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Interfaces/Pedido';
import { PedidosService } from '../Servicios/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private PedidoService:PedidosService){
    this.ListaPedidos = PedidoService.ListaPedido;
  }
  
  ListaPedidos: Pedido[]=[];
  

  ngOnInit(): void {
    
  }
}
