import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  obj = {}
  constructor( private task : TaskService) { 
  }

  ngOnInit() {
    this.task.getPost().subscribe(
      (data) => this.obj = data
    );
  }


}
