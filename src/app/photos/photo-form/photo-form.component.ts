import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(255)],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => {
        this.router.navigate(['']);
        this.alertService.success("Upload complete!", true);
    },
    err => {
        this.alertService.danger("Upload fail!");
    }
    );

  }

  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
