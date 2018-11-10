import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CourseService {
    
    constructor(private http: Http) { }

    fetchCourses(): Promise<any>{
        return this.http.get('http://localhost:8080/courses')
        .toPromise()
        .then(res=>res.json())
    }

}