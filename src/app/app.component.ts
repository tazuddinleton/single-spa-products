import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products';
  products: any[] = [];
  constructor() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              this.products = json;
              console.log(json);
            });
  }

}
