import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "仙草的網頁"

  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt: MouseEvent){
    this.title = "The shengrass's note";
    console.log(evt);
    console.log(evt.clientX);
  }
}
