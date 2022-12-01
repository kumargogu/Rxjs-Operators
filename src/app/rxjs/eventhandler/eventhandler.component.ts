import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';


@Component({
  selector: 'app-eventhandler',
  templateUrl: './eventhandler.component.html',
  styleUrls: ['./eventhandler.component.css']
})
export class EventhandlerComponent implements AfterViewInit {

  postsArrsy = [
    { title: "Angular", description: "frent-end frame work" },
    { title: "PHP", description: "backeng programming" },
    { title: "Java", description: "Backend programming" }
  ];
  postsArrayObservables$ = from(this.postsArrsy);
////////////////////////////////////////////////////
  
  promice = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve the promise sendingdata..!");
    }, 3000);
  });
  promiseObservable$ = from(this.promice);

  
  
  constructor() { 
    this.postsArrayObservables$.subscribe({//data=>console.log(data)
      next: data => console.warn(data),
      error: error => console.warn(error),
      complete: () => console.warn("Complete done!")
    });


    /////////////////////

    this.promiseObservable$.subscribe({//data=>console.log(data)
      next: data => console.warn(data),
      error: error => console.warn(error),
      complete: () => console.warn("promise Complete done!")
    });
  }





  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-btn'), 'click').subscribe({//data=>console.log(data)
      next: data => console.warn(data),
      error: error => console.warn(error),
      complete: () => console.warn(" event handler fromEvent Complete done!")
    })
  }



}
