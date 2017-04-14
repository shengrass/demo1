import { DataService } from './../data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  titleChanged = new EventEmitter<string>();
  is_h3_highlight = false;
  counter = 0;

  //New 物件時執行
    constructor(public dataservice:DataService){

  }

  //頁面初始化時會執行
  ngOnInit() { }

  changeTitle(evt: MouseEvent) {
    this.dataservice.title = "The shengrass's note";
    //把title傳到app.component.html
    this.titleChanged.emit(this.dataservice.title);
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
