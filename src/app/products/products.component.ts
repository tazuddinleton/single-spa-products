import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { testExportFunc } from '@kaz/auth';
import {AuthServiceService} from '@kaz/auth'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    testExportFunc('Products');

    // Check if user is logged in here
    if (true) {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              this.products = json;
              console.log(json);
            });
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
