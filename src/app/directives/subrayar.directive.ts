import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() color:string;

  constructor(private element: ElementRef) {
    console.trace('SubrayarDirective constructor');
  }
  
  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('SubrayarDirective mouseEnter');
    console.trace(`Mouse enter ${this.color}`);
    this.element.nativeElement.style.textDecoration = "underline";
    this.element.nativeElement.style.textDecorationColor = this.color;
   }

   @HostListener('mouseleave')
   publiconMouseLeave(){
    console.trace('SubrayarDirective mouseLeave');
    this.element.nativeElement.style.textDecoration = "none";

   }
}
