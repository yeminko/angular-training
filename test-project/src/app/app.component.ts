import { Component } from '@angular/core';
import {
  BehaviorSubject,
  from,
  Observable,
  of,
  Subject,
  Subscription,
} from 'rxjs';
import { timeout } from 'rxjs/operators';
import { ShopService } from './shop.service';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myDate = new Date();

  isActivated = false;
  sub: Subscription = new Subscription();

  sub2: Subscription = new Subscription();
  subject = new Subject<number>();

  sub3: Subscription = new Subscription();
  behaviorSubject = new BehaviorSubject<number>(0);

  time = new Observable();

  items = this.shopService.getProducts();

  constructor(
    private userService: UserService,
    private shopService: ShopService
  ) {}

  testSubject() {
    this.subject.next(1);
    this.sub2 = this.subject.subscribe((num) => {
      console.log('num is : ' + num);
    });
    this.subject.next(2);
  }

  testBehaviorSubject() {
    this.behaviorSubject.next(1);
    this.sub3 = this.behaviorSubject.subscribe((num) => {
      console.log('[Behaviour] num is : ' + num);
    });
    this.behaviorSubject.next(2);
  }

  getProducts() {
    this.shopService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }

  test() {
    console.log('Hi');
  }

  addProduct() {
    let data = {
      title: 'Test product',
      price: 1300,
    };
    this.shopService.addProduct(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    let data = {
      title: 'Test product',
      price: 1300,
    };
    this.shopService.updateProduct(7, data).subscribe((response) => {
      console.log(response);
    });
  }

  deleteProduct() {
    this.shopService.deleteProduct(1).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
    // this.time = new Observable((observer) => {
    //   setInterval(() => observer.next(new Date()), 1000);
    // });
    // this.deleteProduct();
    // this.updateProduct();
    // this.addProduct();
    // this.getProducts();
    // this.sub = this.userService.activateObservable.subscribe((didActivate) => {
    //   this.isActivated = didActivate;
    // });
    // // this.testSubject();
    // this.testBehaviorSubject();
    // of('A', 'B', 'C', 'D').subscribe((data) => console.log(data));
    // of([1, 2, 3]).subscribe((data) => console.log(data));
    // from([1, 2, 3]).subscribe((data) => console.log(data));
    // let asyncTask = new Promise((resolve, reject) => resolve('Hi'));
    // from(asyncTask).subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }
}
