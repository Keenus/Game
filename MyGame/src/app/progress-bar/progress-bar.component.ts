import {Component, Input, Output} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {UserServiceService} from "../../services/user-service.service";
import {ActionsService} from "../services/actions-service/actions.service";
import {ActionModel} from "../../assets/models/action-model";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Output() isUserBusy: boolean = false;

  constructor(
    private userService: UserServiceService,
    private actionsService: ActionsService
  ) {}

  questProgress = 0;
  questTimer: any;
  spentTime = 0;
  timeLeft = 0;

  getAction() {
    this.userService.checkLastAction()
    this.userService.timeLeft.subscribe((data: any) => {
      this.timeLeft = data;
    })
  }

  startQuest() {
    console.log('start quest');
    this.getAction();
    this.questTimer = setInterval(() => {
      this.spentTime += 1;
      this.questProgress = (this.spentTime / this.timeLeft) * 100;
      if (this.spentTime >= this.timeLeft) {
        this.questProgress = 100;
        this.spentTime = 0;
        this.userService.isUserBusy.next(false);
        clearInterval(this.questTimer);
        console.log('Quest completed');
      } else {
        console.log(`Quest progress: ${this.questProgress.toFixed()}%`);
      }
    }, 1000);
  }


  ngOnInit() {
    this.startQuest();
  }
  ngOnDestroy() {
    this.userService.action.unsubscribe()
    clearInterval(this.questTimer);
  }
  ngOnChanges() {
    this.startQuest();
  }

}
