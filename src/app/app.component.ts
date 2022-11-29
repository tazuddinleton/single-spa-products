import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'products';
  products: any[] = [];
  constructor(private router: Router) {



  }
  ngOnInit(): void {

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
