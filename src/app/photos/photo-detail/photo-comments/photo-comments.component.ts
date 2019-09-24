import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;

  comments$: Observable<PhotoComment[]>;
  commentsForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentsForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(255)]
    });
  }

  save(){
    const commentText = this.commentsForm.get('comment').value as string;

    this.comments$ = this.photoService.addComment(this.photoId, commentText)
    .pipe(switchMap(() => this.photoService.getComments(this.photoId) ))
    .pipe(tap(() => {
        this.commentsForm.reset();
    }));
  }

  remove(){
    console.log("puff");
  }

}
