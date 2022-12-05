import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'products';
  products: any[] = [];
  constructor(private router: Router) {



  }
  ngOnInit(): void {


  }




}
