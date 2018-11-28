import {Component, Input, OnInit} from '@angular/core';
import {LiveTimeService} from './live-time.service';

@Component({
  selector: 'app-lived-time',
  templateUrl: './lived-time.component.html',
  styleUrls: ['./lived-time.component.css']
})
export class LivedTimeComponent implements OnInit {
  private _time: string;
  differentInTime: string;

  @Input()
  get time() {
    return this._time;
  }

  set time(time: string | Date) {
    if (time instanceof Date) {
      this.timeCount(time);
    } else {
      const timeNum = timeHandle(time);
      time = '';
      for (let i = 0; i < timeNum.length; i++) {
        time += timeNum[i];
        if (i < timeNum.length - 1) {
          time += '-';
        }
      }
      console.log(time);
      this.timeCount(time);
    }
  }


  constructor(
    private liveTimeService: LiveTimeService) {
  }

  ngOnInit() {
  }

  timeCount(date) {
    this.differentInTime = this.liveTimeService.getDiffToNow(date);
  }

}

function timeHandle(time) {
  time = time.split('');
  time.push('-');
  console.log(time);
  let temp = '';
  const timeform = [];
  for (const t of time) {
    if (isNaN(Number(t))) {
      timeform.push(temp);
      temp = '';
    } else {
      temp += t;
    }
  }
  return timeform;
}
