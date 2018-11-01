import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
