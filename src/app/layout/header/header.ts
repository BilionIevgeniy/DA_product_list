import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  public currentUrl = toSignal(
    this.router.events.pipe(
      filter((e: any): e is NavigationEnd => e instanceof NavigationEnd),
      map((e: NavigationEnd) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  public path = computed(() => {
    return this.currentUrl().includes('detail') ? '' : 'detail';
  });

  public btnText = computed(() => {
    return this.currentUrl().includes('detail') ? 'zurück zur Liste' : 'Neues Produkt';
  });

  constructor() {
    effect(() => {
      console.log('URL изменился на:', this.currentUrl());
    });
  }
}
