import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  frame: string = 'weekly';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('assets/data/data.json').subscribe((sourceDate: any) => {
      this.categories = sourceDate;
    });
  }
  changeAppFrame(load: string){
    this.frame = load;
  }
}
