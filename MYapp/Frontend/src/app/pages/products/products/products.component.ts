import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/shared/service/alert.service';
import { DataService } from 'src/app/core/shared/service/data.service';
import { LoaderService } from 'src/app/core/shared/service/loader.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
  })
  
  export class ProductsComponent implements OnInit {

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
          name: 'Samsung Note 10 Plus',
          color: 'Blue',
          rating: '4.1/5',
          price: '59,999/-',
          image: 'assets/img/samsung.jpg',
          category: 'mobiles',
          productId: 3,
          
      },
      {
          name: 'Oppo Reno 7 Pro',
          color: 'Blue',
          rating: '3.5/5',
          price: '39,999/-',
          image: 'assets/img/oppo.jpg',
          category: 'mobiles',
          productId: 4,
          
      },
      {
        name: 'Apple Iphone 13',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/iphone.jpg',
        category: 'mobiles',
        productId: 5,
        

    },
    {
        name: 'OnePlus 9 Pro',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/oneplus.jpg',
        category: 'mobiles',
        productId: 6,
        

    },
    {
        name: 'Samsung Note 10 Plus',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/samsung.jpg',
        category: 'mobiles',
        productId: 7,
        
    },
    {
        name: 'Oppo Reno 7 Pro',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/oppo.jpg',
        category: 'mobiles',
        productId: 8,
        
    },
      {
          name: 'Dell Inspiron',
          color: 'Blue',
          rating: '3.5/5',
          price: '39,999/-',
          image: 'assets/img/dell.webp',
          category: 'laptops',
          productId: 9,
          
  
      },
      {
          name: 'HP Probook',
          color: 'Blue',
          rating: '4.1/5',
          price: '59,999/-',
          image: 'assets/img/hp.webp',
          category: 'laptops',
          productId: 10,
          
      },
      {
          name: 'Apple Macbook Pro',
          color: 'Grey',
          rating: '4.5/5',
          price: '49,999/-',
          image: 'assets/img/apple-macbook-pro.webp',
          category: 'laptops',
          productId: 11,
          
      },
      {
          name: 'MI Notebook Pro',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/minotebook.jpg',
          category: 'laptops',
          productId: 12,
          
      },
      {
        name: 'Dell Inspiron',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/dell.webp',
        category: 'laptops',
        productId: 13,
        

    },
    {
        name: 'HP Probook',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/hp.webp',
        category: 'laptops',
        productId: 14,
        
    },
    {
        name: 'Apple Macbook Pro',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/apple-macbook-pro.webp',
        category: 'laptops',
        productId: 16,
        
    },
    {
        name: 'MI Notebook Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/minotebook.jpg',
        category: 'laptops',
        productId: 17,
        
    },
      {
          name: 'Redmi TV',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/redmi-tv.webp',
          category: 'television',
          productId: 18,
          
      },
      {
          name: 'Noice ColorFit Pro',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/samsung-tv.webp',
          category: 'television',
          productId: 19,
          
      },
      {
          name: 'Noice ColorFit Pro',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/lg-tv.webp',
          category: 'television',
          productId: 20,
  
      },
      {
          name: 'Noice ColorFit Pro',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/oneplus-tv.webp',
          category: 'television',
          productId: 21,
          
  
      },
      {
        name: 'Redmi TV',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/redmi-tv.webp',
        category: 'television',
        productId: 22,
        
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/samsung-tv.webp',
        category: 'television',
        productId: 22,
        
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/lg-tv.webp',
        category: 'television',
        productId: 23,
        

    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/oneplus-tv.webp',
        category: 'television',
        productId: 24,
        

    },
      {
          name: 'Canon EOS 200d',
          color: 'Blue',
          rating: '3.5/5',
          price: '39,999/-',
          image: 'assets/img/canon-eos-200d.webp',
          category: 'cameras',
          productId: 25,
          
      },
      {
          name: 'Nikon D7500',
          color: 'Blue',
          rating: '4.1/5',
          price: '59,999/-',
          image: 'assets/img/nikon-d7500.webp',
          category: 'cameras',
          productId: 26,
          
      },
      {
          name: 'Canon EOS 850d',
          color: 'Grey',
          rating: '4.5/5',
          price: '49,999/-',
          image: 'assets/img/canon-eos-850d.webp',
          category: 'cameras',
          productId: 27,
          
      },
      {
          name: 'Nikon Z5',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/nikon-z5.webp',
          category: 'cameras',
          productId: 28,
          
      },
      {
        name: 'Canon EOS 200d',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/canon-eos-200d.webp',
        category: 'cameras',
        productId: 29,
        
    },
    {
        name: 'Nikon D7500',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/nikon-d7500.webp',
        category: 'cameras',
        productId: 30,
        
    },
    {
        name: 'Canon EOS 850d',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/canon-eos-850d.webp',
        category: 'cameras',
        productId: 31,
        
    },
    {
        name: 'Nikon Z5',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/nikon-z5.webp',
        category: 'cameras',
        productId: 32,
        
    },
      {
          name: 'Apple 7',
          color: 'Blue',
          rating: '3.5/5',
          price: '39,999/-',
          image: 'assets/img/apple-watch-7.webp',
          category: 'watches',
          productId: 33,
          
      },
      {
          name: 'boAt Wave Lite',
          color: 'Blue',
          rating: '4.1/5',
          price: '59,999/-',
          image: 'assets/img/boAt-wave-lite.webp',
          category: 'watches',
          productId: 34,
          
      },
      {
          name: 'Samsung Galaxy',
          color: 'Grey',
          rating: '4.5/5',
          price: '49,999/-',
          image: 'assets/img/samsung-galaxy-watch.webp',
          category: 'watches',
          productId: 35,
          
      },
      {
          name: 'Noice ColorFit Pro',
          color: 'Black',
          rating: '4.7/5',
          price: '99,999/-',
          image: 'assets/img/noice-colorfit-pro.webp',
          category: 'watches',
          productId: 36,
          
      },
      {
        name: 'Apple 7',
        color: 'Blue',
        rating: '3.5/5',
        price: '39,999/-',
        image: 'assets/img/apple-watch-7.webp',
        category: 'watches',
        productId: 37,
        
    },
    {
        name: 'boAt Wave Lite',
        color: 'Blue',
        rating: '4.1/5',
        price: '59,999/-',
        image: 'assets/img/boAt-wave-lite.webp',
        category: 'watches',
        productId: 38,
        
    },
    {
        name: 'Samsung Galaxy',
        color: 'Grey',
        rating: '4.5/5',
        price: '49,999/-',
        image: 'assets/img/samsung-galaxy-watch.webp',
        category: 'watches',
        productId: 39,
        
    },
    {
        name: 'Noice ColorFit Pro',
        color: 'Black',
        rating: '4.7/5',
        price: '99,999/-',
        image: 'assets/img/noice-colorfit-pro.webp',
        category: 'watches',
        productId: 40,
        
    },
  ];
  cartObj: any = {};
    filteredProducts: any = [];



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
 
}
constructor(private loader: LoaderService,
  private alertService: AlertService,
  private dataService: DataService,
  protected router: Router) { }


  ngOnInit(): void {
      this.products.filter((element) => {
          debugger
        let path = window.location.pathname.split('/');
        const route = path[path.length - 1];
          if(element.category === route){
              this.filteredProducts.push(element);
          }
      })
      console.log(this.filteredProducts);
  }

}



