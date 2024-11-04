import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'input[appColorText]',
  standalone: true
})
export class ColorTextDirective {

  colors = ['green', 'crimson', 'blue', 'violet', 'orange', 'gold'];
  @HostBinding('style.color')
  color="black"
  @HostBinding('style.border-color')
  borderColor="black"

  @HostListener('keyup')
  changeColour(){
    let i=Math.floor(Math.random()*(this.colors.length-1))
    this.color=this.colors[i]
    this.borderColor=this.colors[i]
  }

  constructor() {
  }

}
