import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

   departments = [ 
     {"id" : 1,"name" :"Angular"},
     {"id" : 2,"name" :"Python"},
     {"id" : 3,"name" :"Ruby"},
     {"id" : 4,"name" :"MySQL"},
     {"id" : 5,"name" :"CSS3"}
  ];
  constructor(private router :Router) { }

  ngOnInit() {
  }

  onSelect(department: any){
    this.router.navigate(['/departments',department.id]);
  }
}
