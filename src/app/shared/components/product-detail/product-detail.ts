import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { FileStoreService, MyFile } from '../../../core/services/file-store';

@Component({
  selector: 'app-product-detail',
  imports: [UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private activatedRoute = inject(ActivatedRoute);
  private fileStore = inject(FileStoreService);

  detail = signal({
    name: '',
    description: '',
    specs: '',
    stock: 0,
    price: 0,
  });

  ngOnInit() {
    const name = this.activatedRoute.snapshot.params['name'];
    const file = this.fileStore.getFileById(name);
    if (file()) {
      this.detail.set(file()!);
    }
  }
  deleteDetail() {
    this.detail.set({ ...this.detail(), name: '' });
  }
}
