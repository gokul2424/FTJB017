import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CourseService } from './course.service';
import { WorkoutComponent } from './components/workout.component';
import { CategoryComponent } from './components/category.component';

const appRoutes: Routes = [
  { path: '', component: WorkoutComponent },
  { path: 'category',      component: CategoryComponent }
];


@NgModule({
  declarations: [
    AppComponent, BadgeComponent, WorkoutComponent, CategoryComponent
  ],
  imports: [
    BrowserModule, HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
