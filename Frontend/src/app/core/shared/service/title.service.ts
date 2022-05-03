import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TitleService {

    title: string;

    constructor(
        private router: Router,
        private titleService: Title
    ) { }

    setTitle = () => {
        debugger
        this.router.events
            .pipe(
                filter((event: any) => event instanceof NavigationEnd),
                map(() => {
                    debugger
                    let route: ActivatedRoute = this.router.routerState.root;
                    let routeTitle = '';
                    while (route!.firstChild) {
                        route = route.firstChild;
                    }
                    if (route.snapshot.data['title']) {
                        routeTitle = route!.snapshot.data['title'];
                    }
                    return routeTitle;
                })
            )
            .subscribe((title: string) => {
                if (title) {
                    this.titleService.setTitle(`MyCart - ${title}`);
                }
            });
    }
}