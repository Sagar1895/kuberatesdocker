import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/shared/service/alert.service';
import { DataService } from 'src/app/core/shared/service/data.service';
import { LoaderService } from 'src/app/core/shared/service/loader.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  btnText: any = 'Add to cart';

    
    constructor(private loader: LoaderService,
      private alertService: AlertService,
      private dataService: DataService,
      protected router: Router) { }

  ngOnInit(): void {
  }

  categories: any[] = ['mobiles', 'laptops','television','cameras', 'watches'];
       

products: any[] = [
    {
        name: 'Apple Iphone 13',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/iphone.jpg',
        category: 'mobiles',
        productId: 1,
        btnText: 'Add to cart'

    },
    {
        name: 'OnePlus 9 Pro',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/oneplus.jpg',
        category: 'mobiles',
        productId: 2,
        btnText: 'Add to cart'

    },
    {
        name: 'Samsung Note 10 Plus',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/samsung.jpg',
        category: 'mobiles',
        productId: 3,
        btnText: 'Add to cart'
    },
    {
        name: 'Oppo Reno 7 Pro',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/oppo.jpg',
        category: 'mobiles',
        productId: 4,
        btnText: 'Add to cart'
    },
    {
        name: 'Dell Inspiron',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/dell.webp',
        category: 'laptops',
        productId: 5,
        btnText: 'Add to cart'

    },
    {
        name: 'HP Probook',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/hp.webp',
        category: 'laptops',
        productId: 6,
        btnText: 'Add to cart'
    },
    {
        name: 'Apple Macbook Pro',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/apple-macbook-pro.webp',
        category: 'laptops',
        productId: 7,
        btnText: 'Add to cart'
    },
    {
        name: 'MI Notebook Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/minotebook.jpg',
        category: 'laptops',
        productId: 8,
        btnText: 'Add to cart'
    },
    {
        name: 'Redmi TV',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/redmi-tv.webp',
        category: 'television',
        productId: 9,
        btnText: 'Add to cart'
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/samsung-tv.webp',
        category: 'television',
        productId: 10,
        btnText: 'Add to cart'
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/lg-tv.webp',
        category: 'television',
        productId: 11,
        btnText: 'Add to cart'

    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/oneplus-tv.webp',
        category: 'television',
        productId: 12,
        btnText: 'Add to cart'

    },
    {
        name: 'Canon EOS 200d',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/canon-eos-200d.webp',
        category: 'cameras',
        productId: 13,
        btnText: 'Add to cart'
    },
    {
        name: 'Nikon D7500',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/nikon-d7500.webp',
        category: 'cameras',
        productId: 14,
        btnText: 'Add to cart'
    },
    {
        name: 'Canon EOS 850d',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/canon-eos-850d.webp',
        category: 'cameras',
        productId: 15,
        btnText: 'Add to cart'
    },
    {
        name: 'Nikon Z5',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/nikon-z5.webp',
        category: 'cameras',
        productId: 16,
        btnText: 'Add to cart'
    },
    {
        name: 'Apple 7',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/apple-watch-7.webp',
        category: 'watches',
        productId: 17,
        btnText: 'Add to cart'
    },
    {
        name: 'boAt Wave Lite',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/boAt-wave-lite.webp',
        category: 'watches',
        productId: 18,
        btnText: 'Add to cart'
    },
    {
        name: 'Samsung Galaxy',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/samsung-galaxy-watch.webp',
        category: 'watches',
        productId: 19,
        btnText: 'Add to cart'
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/noice-colorfit-pro.webp',
        category: 'watches',
        productId: 20,
        btnText: 'Add to cart'
    }
];
addToCart: boolean = false;

cartObj: any = {};



onAddToCart(event: any, item: any) {
  if(!this.cartObj[item.productId]){
    this.cartObj[item.productId] = {
      quantity: 1,
      ...item
    }

    this.dataService.sendData('cartData', this.cartObj);

    console.log(this.cartObj);
    this.alertService.toastSuccess(`${item.name} added to cart`);
  }
  // if(item.btnText === 'Add to cart'){
  //       item.btnText = 'Go to cart';
  //       this.alertService.toastSuccess(`${item.name} added to cart`);
  // } else {
  //    this.router.navigate(['/user/cart']);
  // }
 
}

}
