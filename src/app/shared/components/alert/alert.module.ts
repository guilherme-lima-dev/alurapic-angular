import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
    exports:[
        AlertComponent
    ],
    imports:[
        CommonModule
    ],
    declarations:[
        AlertComponent
    ]
})
export class AlertModule{

}