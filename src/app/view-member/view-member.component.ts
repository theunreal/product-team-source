import { Component, OnInit,Input } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css'],
  animations: [
    /* Text effects for smoother experience */
  trigger('textChange', [
    transition('* => void', [
      animate(200, keyframes([
        style({opacity: 1, transform: 'scale(1.1)', offset: 0}),
        style({opacity: 0, transform: 'scale(0)',     offset: 1.0})
      ]))
    ]),
    transition('void => *', [
      animate(200, keyframes([
        style({opacity: 0, transform: 'scale(0', offset: 0}),
        style({opacity: 1, transform: 'scale(1.1)',     offset: 0.7}),
        style({transform: 'scale(1)',     offset: 1})
      ]))
    ]),
])]
})
export class ViewMemberComponent implements OnInit {

  @Input() member;
  action = false;
  switchText;

  constructor(public dialogRef: MdDialogRef<ViewMemberComponent>) { }

  ngOnInit() {
  }

  changeState() {
    // Prevent unintended behavior
    if (!this.action) {
    this.action = true;

      if (this.member.isLoggedIn)
        this.member.isLoggedIn = false;
      else
        this.member.isLoggedIn = true;

      }
}

/*
  Executed when the first anmation ends
  Text should appear in the same place as the previous one
*/
showText(event) {
  if (event.toState)
    this.switchText = true;
}

}
