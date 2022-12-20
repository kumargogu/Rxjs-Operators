import { Component, OnInit } from "@angular/core";
import { TodoModel } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls:['test.component.css'],
    
})
export class TestComponent implements OnInit{
    lstTodoModel: TodoModel[];
   constructor(private todoService:TodoService) {
        
   }
ngOnInit(): void {
    this.loadData();
    }
    loadData() {
      this.todoService.getAll().subscribe(res => {
          this.lstTodoModel = res;
          //console.log(this.lstTodoModel);
       })
    }
}