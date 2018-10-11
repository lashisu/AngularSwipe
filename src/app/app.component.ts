import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  BASE_VELOCITY = 0.3;
  selctedIndex = 0;

  labels = [
    'Tab 1',
    'Tab 2',
    'Tab 3',
    'Tab 4',
    'Tab 5'
  ];

  contents = [
    'This is Tab 1. You can swipe the tab.',
    'This is Tab 2. You can swipe the tab.',
    'This is Tab 3. You can swipe the tab.',
    'This is Tab 4. You can swipe the tab.',
    'This is Tab 5. You can swipe the tab.'
  ];

  swipe(idx, event) {
    const steps = this.calcSteps(event.velocityX);
    if (event.type === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selctedIndex + steps >= this.labels.length - 1;
      this.selctedIndex = isLast ? this.labels.length - 1 : this.selctedIndex + steps;
    }

    if (event.type === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selctedIndex - steps <= 0;
      this.selctedIndex = isFirst ? 0 : this.selctedIndex - steps;
    }
  }

  private calcSteps(velocity) {
    const v = Math.abs(velocity);
    if (v < 2 * this.BASE_VELOCITY) {
      return 1;
    } else if (v < 3 * this.BASE_VELOCITY) {
      return 2;
    } else if (v < 4 * this.BASE_VELOCITY) {
      return 3;
    } else {
      return 4;
    }
  }
}
