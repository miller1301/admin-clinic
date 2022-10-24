import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() { 

    // this.returnObservable()
    //   .pipe(
    //     retry(2)
    //   )
    //   .subscribe({
    //   next: (valor) => console.log('Obs: ', valor),
    //   error: (e) => console.error('Error: ', e),
    //   complete: () => console.info('Obs terminado') 
    // });

    this.intervalSubs = this.returnInterval().subscribe( console.log );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(200)
      .pipe(
        take(10),
        map( valor => valor + 1 ),
        filter( valor => (valor %  2 === 0) )
      );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if( i == 4 ){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i == 2 ) observer.error('i llegó a 2');
        
      }, 1000)
    });
  }

}
