import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
    selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {
    private _ErrorMsgColor: string = "red";
    private _ErrorMsgText: string = "El valor no es valido";
    private _ErrorMsgValid: boolean = false;

    @Input() set ErrorMsgColor(valor: string) {
        this._ErrorMsgColor = valor;
        this.setColor();
    }

    @Input() set ErrorMsgText(valor: string) {
        this._ErrorMsgText = valor;
        this.setText();
    }

    @Input() set ErrorMsgValid(valor: boolean) {
        this._ErrorMsgValid = valor;
        this.setValid();
    }

    constructor(
        private element: ElementRef<HTMLElement>
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.setClass();
        this.setColor();
        this.setText();
    }

    setClass(): void {
        this.element.nativeElement.classList.add("form-text")
    }

    setColor(): void {
        this.element.nativeElement.style.color = this._ErrorMsgColor;
    }

    setText(): void {
        this.element.nativeElement.innerText = this._ErrorMsgText;
    }

    setValid(): void {
        this.element.nativeElement.style.display = (this._ErrorMsgValid) ? "" : "none";
    }

}
