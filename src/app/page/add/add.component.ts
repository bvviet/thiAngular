import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  productService = inject(ProductService);
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  handleSubmit() {
    const data = this.form.value;
    this.productService.postProduct(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {},
    });
    console.log(this.form.value);
  }
}
