import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { productType } from '../../types/product.type';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: productType[] = [];
  productService = inject(ProductService);
  ngOnInit(): void {
    this.get();
  }
  get() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => {},
    });
  }
  delete(id: string) {
    if (window.confirm('Ban chac chan xoa')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.get();
        },
        error: () => {},
      });
    }
  }
}
