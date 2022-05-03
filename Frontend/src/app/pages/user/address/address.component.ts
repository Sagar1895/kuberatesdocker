import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  savedAddress: any[] = [
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
    

},
   
  ];
  type: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  show: boolean = false;
  public deploymentName: any;
  showModal(value: any){
    this.show = !this.show;
    this.type = value;
  }
  fnAddDeploytment(){
    alert(this.deploymentName);
  }

  onProceedToCheckout(){
    this.router.navigate(['user/checkout']);
  }
}
