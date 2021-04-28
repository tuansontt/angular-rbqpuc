import { Component, ViewChild } from '@angular/core';
import { ChatAdapter,User, ChatParticipantStatus } from 'ng-chat';
import { DemoAdapter } from './demo-adapter';
import { IChatController } from 'ng-chat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
 userId = 999;
   public adapter: ChatAdapter = new DemoAdapter();
   @ViewChild('ngChatInstance', { static: false }) protected ngChatInstance: IChatController;
  click()
  {
    var user = new User();
    user.id = 9999;
    user.displayName = 'sonnt2';
    user.status = ChatParticipantStatus.Online;
    this.ngChatInstance.triggerOpenChatWindow(user);
  }
}
