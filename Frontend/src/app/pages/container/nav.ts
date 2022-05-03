import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'All Products',
    url: 'user/products',
    icon: 'fab fa-product-hunt',
  },
  {
    name: 'Mobiles',
    url: 'user/products/mobiles',
    icon: 'fa fa-mobile',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
  },
  {
    name: 'Laptops',
    url: 'user/products/laptops',
    icon: 'fa fa-laptop',
  },
  {
    name: 'Television',
    url: 'user/products/television',
    icon: 'fa fa-laptop',
  },
  {
    name: 'Cameras',
    url: 'user/products/cameras',
    icon: 'fa fa-camera',
  },
  {
    name: 'Watches',
    url: 'user/products/watches',
    icon: 'fa fa-clock-o',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }
];
