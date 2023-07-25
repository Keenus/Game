import { Component } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isUserBusy = false;

  constructor(private UserService : UserServiceService) { }

  title = 'MyGame';

  ngOnInit() {
    this.UserService.user
      .subscribe((value) => {
        this.isUserBusy = value;
      });
  }
}
