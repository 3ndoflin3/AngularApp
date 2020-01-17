import { Component } from '@angular/core';

//Componente principal que se carga al arrancar la app
/**
 * SELECTOR: nombre de la etiqueta para inyectar componente en html
 * TEMPLATEURL: nombre de la vista del html 
 * styleUrls: estilos para la vista formato scss
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Vatiable que se visualiza con {{title}} en el html
  title = 'my-app';

  productos = [
	{
		"id": 34,"nombre": "cafe","gluten": true,"precio": 1.46,
		"categoria": {
			"id": 1,
			"nombre": "bebidas"
		},
		"historico": [
			{"fecha": "01/12/2019","precio": 1.50},
			{"fecha": "01/12/2019","precio": 1.50},
			{"fecha": "01/12/2019","precio": 1.50}]
	},

	{
		"id": 34,"nombre": "galletas","gluten": false,"precio": 1.16,
		"categoria": {
			"id": 4,
			"nombre": "dulces"},
		"historico": [{"fecha": "07/02/2019","precio": 4.60},
			{"fecha": "01/02/2019","precio": 1.50},
			{"fecha": "01/12/2019","precio": 1.50}]
	},
];

pSeleccionado = this.productos[0];

seleccionarProducto = function (event, producto){
  console.log('hemos hecho click');
  this.pSeleccionado = producto;
};

products = { "products" : [
	{ "Name": "Cheese", "Price" : 2.50, "Location": "Refrigerated foods"},
	{ "Name": "Crisps", "Price" : 3, "Location": "the Snack isle"},
	{ "Name": "Pizza", "Price" : 4, "Location": "Refrigerated foods"},
	{ "Name": "Chocolate", "Price" : 1.50, "Location": "the Snack isle"},
	{ "Name": "Self-raising flour", "Price" : 1.50, "Location": "Home baking"},
	{ "Name": "Ground almonds", "Price" : 3, "Location": "Home baking"}
  ]};





}
