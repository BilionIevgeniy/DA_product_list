import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);

  public btnPath = computed(() => {
    return this.activeRouteData()['btnPath'] ?? '';
  });

  public btnText = computed(() => {
    return this.activeRouteData()['btnText'] ?? 'Neues Produkt';
  });

  public path = computed(() => {
    return this.activeRouteData()['path'] ?? '';
  });

  private activeRouteData = toSignal(
    this.router.events.pipe(
      filter((e: any): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => {
        let currentRoute = this.router.routerState.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        return currentRoute.snapshot.data;
      }),
    ),
    { initialValue: {} as Record<string, any> },
  );
}
