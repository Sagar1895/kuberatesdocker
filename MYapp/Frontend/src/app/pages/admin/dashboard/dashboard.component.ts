import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../../core/shared/service/loader.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    categories: any[] = ['mobiles','laptops','television','cameras','watches'];

    products: any[] = [
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/iphone.jpg',
            category: 'mobiles'
        },
        {
            name: 'OnePlus 9 Pro',
            color: 'Grey',
            rating: '4.5/5',
            price: '49,999/-',
            image: 'assets/img/oneplus.jpg',
            category: 'mobiles'
        },
        {
            name: 'Samsung Note 10 Plus',
            color: 'Blue',
            rating: '4.1/5',
            price: '59,999/-',
            image: 'assets/img/samsung.jpg',
            category: 'mobiles'
        },
        {
            name: 'Oppo Reno 7 Pro',
            color: 'Blue',
            rating: '3.5/5',
            price: '39,999/-',
            image: 'assets/img/oppo.jpg',
            category: 'mobiles'
        },
        {
            name: 'Dell Inspiron',
            color: 'Blue',
            rating: '3.5/5',
            price: '39,999/-',
            image: 'assets/img/dell.webp',
            category: 'laptops'
        },
        {
            name: 'HP Probook',
            color: 'Blue',
            rating: '4.1/5',
            price: '59,999/-',
            image: 'assets/img/hp.webp',
            category: 'laptops'
        },
        {
            name: 'Apple Macbook Pro',
            color: 'Grey',
            rating: '4.5/5',
            price: '49,999/-',
            image: 'assets/img/apple-macbook-pro.webp',
            category: 'laptops'
        },
        {
            name: 'MI Notebook Pro',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/minotebook.jpg',
            category: 'laptops'
        },
        {
            name: 'Redmi TV',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/redmi-tv.webp',
            category: 'television'
        },
        {
            name: 'Noice ColorFit Pro',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/samsung-tv.webp',
            category: 'television'
        },
        {
            name: 'Noice ColorFit Pro',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/lg-tv.webp',
            category: 'television'
        },
        {
            name: 'Noice ColorFit Pro',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/oneplus-tv.webp',
            category: 'television'
        },
        {
            name: 'Canon EOS 200d',
            color: 'Blue',
            rating: '3.5/5',
            price: '39,999/-',
            image: 'assets/img/canon-eos-200d.webp',
            category: 'cameras'
        },
        {
            name: 'Nikon D7500',
            color: 'Blue',
            rating: '4.1/5',
            price: '59,999/-',
            image: 'assets/img/nikon-d7500.webp',
            category: 'cameras'
        },
        {
            name: 'Canon EOS 850d',
            color: 'Grey',
            rating: '4.5/5',
            price: '49,999/-',
            image: 'assets/img/canon-eos-850d.webp',
            category: 'cameras'
        },
        {
            name: 'Nikon Z5',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/nikon-z5.webp',
            category: 'cameras'
        },
        {
            name: 'Apple 7',
            color: 'Blue',
            rating: '3.5/5',
            price: '39,999/-',
            image: 'assets/img/apple-watch-7.webp',
            category: 'watches'
        },
        {
            name: 'boAt Wave Lite',
            color: 'Blue',
            rating: '4.1/5',
            price: '59,999/-',
            image: 'assets/img/boAt-wave-lite.webp',
            category: 'watches'
        },
        {
            name: 'Samsung Galaxy',
            color: 'Grey',
            rating: '4.5/5',
            price: '49,999/-',
            image: 'assets/img/samsung-galaxy-watch.webp',
            category: 'watches'
        },
        {
            name: 'Noice ColorFit Pro',
            color: 'Black',
            rating: '4.7/5',
            price: '99,999/-',
            image: 'assets/img/noice-colorfit-pro.webp',
            category: 'watches'
        }
    ];
    addToCart: boolean = false;

    constructor(
        private loader: LoaderService,
    ) { }

    ngOnInit(): void {


    }

    onAddToCart() {
       this.addToCart = true;
    }

    
}

