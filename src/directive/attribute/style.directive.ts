import { style } from "@angular/animations";
import { Directive, ElementRef, Input, OnInit, Renderer2, input } from "@angular/core";
import { reduce } from "rxjs";

@Directive({
    selector: "[style-directive]",

})

export class StyleDirective implements OnInit{
    @Input("style-directive") style!: {[key:string]: string | number };

    constructor(private el: ElementRef, private rendrer: Renderer2){}
    
    ngOnInit(): void {
        if(this.style != undefined && this.style != null){
            var keys = Object.keys(this.style)
            console.log("key:", keys)
            keys.forEach((key)=>{
                console.log("val:",this.style[key] )
                this.rendrer.setStyle(this.el.nativeElement, key, this.style[key] );
            })
        }
    }
    
}