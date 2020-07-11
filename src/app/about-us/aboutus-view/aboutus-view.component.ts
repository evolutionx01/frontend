import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-aboutus-view',
  templateUrl: './aboutus-view.component.html',
  styleUrls: ['./aboutus-view.component.scss']
})
export class AboutusViewComponent implements OnInit {

  albumArr = [];
  caption = ['', 'Work Station', 'Waiting Room', 'Reception', 'Reception', 'Conference Room', 'Board Room', 'Meeting Room'];

  constructor(
    private lightbox: Lightbox
  ) {

    for (let i = 1; i <= 7; i++) {
      const src = '../../../assets/gallery' + i + '.jpg';
      const caption = this.caption[i];
      const thumb = '../../../assets/gallery' + i + '.jpg';
      const album = {
         src,
         caption,
         thumb
      };
      this.albumArr.push(album);
    }
  }

  ngOnInit(): void {
  }

  open(index: number) {
    // open lightbox
    this.lightbox.open(this.albumArr, index);
  }

  close() {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
