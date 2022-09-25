import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from 'src/app/productos/productos-routing.module';
import { AgregarComponent } from 'src/app/productos/pages/agregar/agregar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        AgregarComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductosRoutingModule,
        SharedModule,
    ]
})
export class ProductosModule { }
