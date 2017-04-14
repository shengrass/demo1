import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  //提升 production 的執行速度
  enableProdMode();
}
//啟動 AppModule 這個模組
platformBrowserDynamic().bootstrapModule(AppModule);
