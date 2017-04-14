import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //加上 Service 元件
  providers: [DataService],
  bootstrap: [AppComponent]
})
//預設全站唯一的Module
export class AppModule { }
