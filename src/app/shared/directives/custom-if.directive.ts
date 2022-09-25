import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[CustomIf]'
})
export class CustomIfDirective {

    @Input() set CustomIf(value: boolean) {
        if( value ) {
            this.container.createEmbeddedView( this.element );
        }
        else {
            this.container.clear();
        }
    }

    constructor(
        private element: TemplateRef<HTMLElement>,
        private container: ViewContainerRef
    ) {
        // Do nothing
    }

}
