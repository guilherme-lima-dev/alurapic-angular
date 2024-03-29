import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ 
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        PhotoModule,
        ImmediateClickModule,
    ]
})
export class PhotoFormModule { }