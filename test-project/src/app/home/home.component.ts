import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { interval, Observable, of, Subscription, throwError } from 'rxjs';

import { catchError, exhaustMap, filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  firstSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  onLoadServer(id: number) {
    this.router.navigate(['servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  customInterval() {
    return new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        // if (count == 2) observer.complete();
        if (count > 3) observer.error(new Error('Count is greater than 3!'));
        observer.next(count);
        count++;
      }, 1000);
    });
  }

  testExhaustMap() {
    this.firstSub = this.customInterval()
      .pipe(
        exhaustMap((val) => {
          console.log('Value from outer : ' + val);
          return interval().pipe(take(3));
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => alert(error.message)
      );
  }

  ngOnInit(): void {
    this.testExhaustMap();
    // this.firstSub = this.customInterval()
    //   .pipe(
    //     filter((data) => data != 0),
    //     map((data) => 'Round ' + data),
    //     catchError((error) => {
    //       throw 'Error found!: ' + error;
    //     }),
    //     take(10)
    //   )
    //   .subscribe(
    //     (count) => {
    //       console.log(count);
    //     },
    //     (error) => {
    //       alert(error);
    //     },
    //     () => {
    //       console.log('Completed!');
    //     }
    //   );
  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
  }
}
