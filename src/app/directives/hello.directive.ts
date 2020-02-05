import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() color:string;

  constructor(private element: ElementRef) {
    console.trace('HelloDirective constructor');
   }

   @HostListener('mouseenter')
   publiconMouseEnter(){
    console.trace('HelloDirective mouseEnter');
    this.element.nativeElement.style.backgroundColor = this.color;
   }

   @HostListener('mouseleave')
   publiconMouseLeave(){
    console.trace('HelloDirective mouseLeave');
    this.element.nativeElement.style.backgroundColor = '';
   }


}
