import {Component, Input, Output} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input()   action: any = {};
  @Output() isUserBusy: boolean = false;

  constructor() {userService: UserServiceService}
  questProgress = 0;
  questTimer: any;
  spentTime = 0;


  startQuest() {
    console.log(this.action)
    let questTime = this.action.time * 60000;
    this.questTimer = setInterval(() => {
      this.questProgress = this.spentTime / questTime * 100;
      console.log(this.questProgress)
      this.spentTime += 1000;
      if (this.spentTime >= questTime) {
        clearInterval(this.questTimer);
        this.questProgress = 0;
        this.spentTime = 0;
      }
    }, 1000); // Interval of 1000ms (1 second)
  }



  ngOnInit() {
    this.startQuest();
  }

  ngOnDestroy() {
    // Don't forget to clear the timer to avoid memory leaks
    clearInterval(this.questTimer);
  }
  ngOnChanges() {
    this.startQuest();
  }

}
