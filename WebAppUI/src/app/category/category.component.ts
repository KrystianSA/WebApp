import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private router: Router) { }
  
  logout() {
    let token = localStorage.removeItem('jwt');
    if (token == null) {
      this.router.navigate(['/']);
    }
  }
}
