import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;
  constructor(
      private route: ActivatedRoute, 
      private photoService: PhotoService,
      private router: Router,
      private alertService: AlertService,
      private userService: UserService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(()=>{},
      err => {
        this.router.navigate(['not-found']);
      }
    );
  }

  remove(){
      this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
          this.router.navigate(['/user', this.userService.getUserName()]);
          this.alertService.success("Photo removed!", true);
      },
      err => {
          this.alertService.danger("Could not delete the photo!", true);
      }
      );
  }

}
