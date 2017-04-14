import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //從app.component.html傳title進來
  @Input()
  title = "仙草的網頁"

  @Output()

  titleChanged = new EventEmitter();

  is_h3_highlight = false;
  counter = 0;
  constructor() { }

  //頁面初始化時會執行
  ngOnInit() { }

  changeTitle(evt: MouseEvent) {
    this.title = "The shengrass's note";
    this.titleChanged.emit(this.title);
    this.counter++;
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
