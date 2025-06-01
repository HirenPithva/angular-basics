import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector:"[mask-directive]"
})

export class MaskDirective implements OnInit, OnChanges{
    @Input('mask-directive') formate!:string;
    constructor(private el: ElementRef, private rendrer: Renderer2){}
    value!: string;
    ngOnInit(): void {
        this.value = this.el.nativeElement.value;
        if(this.formate && this.value){
            this.maskValue(this.value);
        }
    }


    ngOnChanges(changes: SimpleChanges): void {
        this.value = this.el.nativeElement.value;

        if(this.formate && this.value){
            this.maskValue(this.value);
        }
    }

    @HostListener('input', ['$event'] )
    onInput(event: Event){
        this.value = (event?.target as HTMLInputElement).value;

        if(this.formate && this.value){
            this.maskValue(this.value);
        }
    }

    maskValue(val: string){
        val = val.replace(/\D/g,'');
        const iEndFormate = this.formate.length;
        const iEndVal = val.length;
        let itr = 0;
        let itrFormate = 0;
        let formatedVal = "";
        while(itr != iEndVal && itrFormate != iEndFormate){
            console.log("fi:", itrFormate, "  char:",this.formate[itrFormate] )
            console.log("vi:", itr, "   char:", val[itr])
            if(this.formate[itrFormate] == 'x'){
                formatedVal += val[itr];
                itr++;
            }
            else{
                formatedVal += this.formate[itrFormate];
            }
            itrFormate++;
        }
       // this.rendrer.setProperty(this.el, 'value',formatedVal )
        this.el.nativeElement.value = formatedVal;
    }
}