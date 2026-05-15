import { Routes } from '@angular/router';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductForm } from './shared/components/product-form/product-form';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
    data: {
      btnText: 'Neues Produkt',
      btnPath: 'form',
      path: '',
    },
  },
  {
    path: 'detail/:name',
    component: ProductDetail,
    data: {
      btnText: 'Zurück zur Liste',
      btnPath: '',
      path: 'detail',
    },
  },
  {
    path: 'form',
    component: ProductForm,
    data: {
      btnText: 'Abbrechen',
      btnPath: '',
      path: 'form',
    },
  },
  // Fallback for unknown routes
  {
    path: '**',
    redirectTo: '',
  },
];
