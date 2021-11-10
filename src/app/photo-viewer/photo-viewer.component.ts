import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {

  photoUrl: string = '';

  constructor(
    private photoService: PhotoFetchService
  ) { }

  ngOnInit(): void {
    this.refreshPhoto();
  }

  refreshPhoto() {
    this.photoService.randomPic().subscribe(data => {
      this.photoUrl = data.urls.regular;
    });
  }

}
