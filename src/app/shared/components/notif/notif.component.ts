import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})
export class NotifComponent implements OnInit {

  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
