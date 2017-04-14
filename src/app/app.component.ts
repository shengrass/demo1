import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  //jquery的選取器<tag>
  //.app-root(class) #app-root(id)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = '';
  data = '';
  error = '';
  changeKeyword(value) {
    this.keyword = value;
  }

  constructor(public dataservice: DataService, private http: Http) {
    this.http.get('api/articles.json')
      .subscribe(
      result => {
        this.data = result.json();
      },
      error => {
        this.error = error
      });
  }

  //只有按下 ESC 才會進入此 function
  clearKeyword(evt: KeyboardEvent) {
    this.keyword = '';
    //this.keyword = (evt.target as HTMLInputElement).value;
  }
}
