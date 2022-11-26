import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'All-Operators';
  res: any;
  @ViewChild('name') ip: any;
  ngAfterViewInit(): void{
    fromEvent(this.ip.nativeElement, 'keyup').pipe(debounceTime(2000)).subscribe((x:any) => {
      this.res = x.target.value;
      
    })
  }
  
}
