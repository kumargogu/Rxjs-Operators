import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.css']
})
export class AjaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //////////////////////////////////
   /*  ajax('https://jsonplaceholder.typicode.com/posts').subscribe(data=> {
      console.log(data.response); // inthis all we will get response among all 
    }) */

   /*  ajax('https://jsonplaceholder.typicode.com/posts').pipe(map((response)=>{
      let data = [];
    
      for(let post of response.response){
        data.push(post.title);
      }
      return data;
    })).subscribe(data=> {
      console.log(data);
    }) */

    ajax.getJSON('https://jsonplaceholder.typicode.com/posts').subscribe(data=> {
      console.log(data);  //direct we will get only response 
      })
    
  /*     ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ayyappa:'Ayyappa Web developer'
        },
        body:{
          title:'Ayyappa Web developer'
        }
      }).subscribe(data=>console.log(data))
       */
  

/////////////////////////////////

  }
//https://www.youtube.com/watch?v=Q-iZ1JHA0GE&list=PL_euSNU_eLbc0HclFbirIaMXaXzQJ_K4n&index=1
}
