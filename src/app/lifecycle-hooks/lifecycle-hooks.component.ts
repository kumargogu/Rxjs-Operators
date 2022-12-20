import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,  DoCheck,  OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{


  changeValue = ['Angular', 'React'];

  constructor() { 
    console.warn("constructor called!.")
  }
  ngOnChanges(): void{
    console.warn("ngOnChanges Called!.");
    

  }
  ngOnInit(): void {
    console.warn("ngOnInit claaed!.")
  }
  ngDoCheck() {
    console.warn("ngDoCheck called!.");
  }
ngAfterContentInit(): void {
  console.warn("ngAfterContentInit Called!.");
}
  ngAfterContentChecked() {
  console.warn("ngAfterContentChecked called!.")
  }
  ngAfterViewInit() {
    console.warn("ngAfterViewInit called!.")
  }
  ngAfterViewChecked() {
    console.warn("ngAfterViewChecked called!.")
  }
  ngOnDestroy(): void {
    console.warn("ngOnDestroy called!.")
  }



  addCourse(val) {
    this.changeValue.push(val);
    console.log(this.changeValue);
  }
  ngondestroy() {
    this.changeValue.splice(0, 1);
  }
}
