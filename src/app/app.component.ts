import { Component } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './demo-adapter';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
 userId = 999;
   public adapter: ChatAdapter = new DemoAdapter();
}
