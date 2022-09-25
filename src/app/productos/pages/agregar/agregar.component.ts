import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
    styleUrls: ['agregar.component.css']
})
export class AgregarComponent implements OnInit {

    mainForm: FormGroup = this.builder.group({
        nombre: ["", Validators.required]
    });

    color: string = "red";
    texto: string = "Esto no es valido";

    constructor(
        private builder: FormBuilder
    ) {
        // Do nothing
     }

    ngOnInit(): void {
        // Do nothing
    }

    guardar() {
        console.log(this.mainForm);
    }

    tieneError(campo: string): boolean {
        return this.mainForm.get(campo)?.invalid || false;
    }

    cambiarColor() {
        this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    }

    cambiarTexto() {
        this.texto = Math.random().toString();
    }

}
