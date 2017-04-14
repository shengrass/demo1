import { Component, OnInit } from '@angular/core';

@Component({
  //jquery的選取器<tag>
  //.app-root(class) #app-root(id)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  changeKeyword(value) {
    this.keyword = value;
  }

  //只有按下 ESC 才會進入此 function
  clearKeyword(evt: KeyboardEvent) {
    this.keyword = '';

    //this.keyword = (evt.target as HTMLInputElement).value;
  }
}
