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

  loadUserAction() {
    this.UserService.userStats
      .subscribe((value) => {
        console.log(value)
        this.isUserBusy = value.action.isBusy
      });
  }

  ngOnInit() {
    this.loadUserAction();
  }
  ngOnChanges() {
    this.loadUserAction();
  }

}
