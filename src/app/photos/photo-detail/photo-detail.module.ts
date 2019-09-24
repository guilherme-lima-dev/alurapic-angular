import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  exports: [
    PhotoDetailComponent, 
    PhotoCommentsComponent
  ]
})
export class PhotoDetailModule { }
