import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private activatedRoute = inject(ActivatedRoute);

  detail = signal({
    name: 'Gaming Maus',
    description: 'Eine ergonomische Gaming-Maus...',
    specs: 'dpi: 6400...',
    stock: 120,
    price: 2500000,
  });

  ngOnInit() {
    const name = this.activatedRoute.snapshot.params['name'];
    this.detail.update((current) => ({ ...current, name }));
  }
  deleteDetail() {
    this.detail.update((current) => ({ ...current, name: '' }));
  }
}
