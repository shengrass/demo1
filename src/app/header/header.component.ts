import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "仙草的網頁"
  is_h3_highlight = false;
  counter = 0;

  constructor() { }

  ngOnInit() { }

  changeTitle(evt: MouseEvent) {
    this.title = "The shengrass's note";
    this.counter ++;
    console.log(evt);
    console.log(evt.clientX);
  }
  changeColor() {
    if (this.is_h3_highlight === false) {
      this.is_h3_highlight = true;
    }
    else {
      this.is_h3_highlight = false;
    }
  }
  getStyle() {
    return { 'background-color': 'yellow' };
  }
}
