import {Component, Input} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() progress: number | undefined;
  @Input() name: string | undefined;

  constructor() {}
  questProgress = 100;
  questTimer: any;

  ngOnInit() {
    // Simulate the quest time with a timer
      this.questTimer = setInterval(() => {
        this.questProgress -= 1; // Reduce the progress by 1% every second
        if (this.questProgress <= 0) {
          this.questProgress = 0; // Ensure the progress doesn't go below 0
          clearInterval(this.questTimer); // Stop the timer when progress reaches 0
        }
      }, 1000); // Interval of 1000ms (1 second)
    }


  ngOnDestroy() {
    // Don't forget to clear the timer to avoid memory leaks
    clearInterval(this.questTimer);
  }
  ngOnChanges() {
    console.log(this.progress, this.name)
  }

}
