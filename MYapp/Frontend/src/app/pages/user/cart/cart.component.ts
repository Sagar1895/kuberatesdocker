import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/shared/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [
    {
        name: 'Apple Iphone 13',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/oneplus.jpg',
        category: 'mobiles',
        productId: 1,
        

    },
    {
        name: 'OnePlus 9 Pro',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/oneplus.jpg',
        category: 'mobiles',
        productId: 2,
        

    },
    {
      name: 'OnePlus 9 Pro',
      color: 'Grey',
      rating: '4.5/5',
      price: '49,999/-',
      image: 'assets/img/oneplus.jpg',
      category: 'mobiles',
      productId: 2,
      

  },
  {
    name: 'OnePlus 9 Pro',
    color: 'Grey',
    rating: '4.5/5',
    price: '49,999/-',
    image: 'assets/img/oneplus.jpg',
    category: 'mobiles',
    productId: 2,
    

}
  ];

  priceDetails : any [] = [
    {
    price: '49,999/-',
    discount: '100/-',
    deliveryCharge: '50/-',
    qty: 2,
    totalAmount: '50,000/-'
    }
  ]

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.dataService.getData('cartData')
    // .subscribe((data: any) => {
    //   this.cartItems = data;
    // })
  }

  onPlaceOrder(){
    this.router.navigate(['user/address']);
  }

  goToProductDetails(){
    this.router.navigate(['user/products/product-details']);
  }

}
