import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileStoreService } from '../../../core/services/file-store';
export interface Product {
  name: string;
  description: string;
  specs: string;
  stock: number;
  price: number;
}
@Component({
  selector: 'app-product-list',
  imports: [RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  list: Product[] = [];
  private fileStore = inject(FileStoreService);

  ngOnInit() {
    this.list = this.fileStore.files();
  }
}
