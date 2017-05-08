//Angular libs
import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
// Our member interface
import { Member } from '../member';
//3rd Party libs
import {Observable} from 'rxjs/Rx';
//Components
import { ViewMemberComponent } from '../view-member/view-member.component';

@Component({
  selector: 'product-members',
  templateUrl: './product-members.component.html',
  styleUrls: ['./product-members.component.css'],

})
export class ProductMembersComponent implements OnInit {

  //TODO: read data from server
  public members: Member[] = [
    {name: "Oded", avatar: "assets/avatars/01.png"},
    {name: "Ron", avatar: "assets/avatars/02.png"},
    {name: "Noam", avatar: "assets/avatars/03.png"},
    {name: "Meni", avatar: "assets/avatars/04.png"},
    {name: "Rubi", avatar: "assets/avatars/05.png"},
    {name: "Yossi", avatar: "assets/avatars/06.png"},
    {name: "Niv", avatar: "assets/avatars/07.png"},
    {name: "Yarin", avatar: "assets/avatars/08.png"},
    {name: "Idan", avatar: "assets/avatars/09.png"},
    {name: "Shmuel", avatar: "assets/avatars/10.png"},
    {name: "Ofri", avatar: "assets/avatars/11.png"},
    {name: "Danny", avatar: "assets/avatars/12.png"},
];

  constructor(public dialog: MdDialog) { }

  /**
  Using an observable to set a member as visible every 350ms
  Assign a random color to member
  */
  ngOnInit() {
    Observable.interval(350)
          .take(this.members.length).map((x) => x+1)
          .subscribe((x) => {
            this.members[x-1].visible = true;
            // What's your color today?
            this.members[x-1].strokeColor = this.getRandomColor();
          });
  }

  /**
  Show the member log in / log out dialog
  */
  viewMember(member) {
    let dialogRef = this.dialog.open(ViewMemberComponent);
    dialogRef.componentInstance.member = member;
  }

  /**
  Generates a random hex color
  */
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

}
