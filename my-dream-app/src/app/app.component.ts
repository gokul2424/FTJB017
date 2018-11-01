import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'First Angular using CLI';

  courses : Array<object> = []

  constructor(private courseService: CourseService){

  }

  ngOnInit(){
    this.courseService.fetchCourses()
    .then(data=> this.courses=data);
  }
}
