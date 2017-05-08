import { Component, Input,ViewChild} from '@angular/core';
import { trigger,state,style,animate,transition,keyframes }
 from '@angular/animations';
@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [
    /** Nice animation for members on page load */
  trigger('memberEntrance', [
    transition('loading => loaded', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%) scale(0.5)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px) scale(1.1)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0) scale(1)',     offset: 1.0})
      ]))
    ]),
])]
})
export class MemberComponent{

  @Input() member;
  @ViewChild('img') img;
  public colored = false; //Set `true` to disable greyscale mode
  public entrance = 'loading';
  public defaultColor ="#EDEDED";

   isHover() {
     return (this.img.nativeElement.querySelector(':hover') === this.img);
   }

}
