import { Component, Input,ViewChild} from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent{

  @Input() member;
  @ViewChild('img') img;
  public colored = false; //Set `true` to disable greyscale mode

   isHover() {
     return (this.img.nativeElement.querySelector(':hover') === this.img);
   }

}
