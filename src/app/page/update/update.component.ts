import { NgIf } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { productType } from '../../types/product.type';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  productService = inject(ProductService);
  router = inject(ActivatedRoute);

  productId!: string;
  product!: productType;

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getDetail(this.productId).subscribe({
        next: (data) => {
          this.product = data;
          console.log(this.product);
        },
        error: (error) => {},
      });
    });
  }

  handleSubmit() {
    this.productService.putProduct(this.productId, this.form.value).subscribe({
      next: () => {
        console.log('sua thanh cong');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
