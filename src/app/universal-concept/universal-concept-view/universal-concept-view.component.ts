import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-universal-concept-view',
  templateUrl: './universal-concept-view.component.html',
  styleUrls: ['./universal-concept-view.component.scss']
})
export class UniversalConceptViewComponent implements OnInit {


  albumArr = [];
  caption = ['', '2014 Seminar', '2014 Seminar', '2014 Seminar', '2015 Seminar', '2015 Seminar', '2015 Seminar', '2015 Seminar'];

  constructor(
    private lightbox: Lightbox
  ) {

    for (let i = 1; i <= 7; i++) {
      const src = '../../../assets/seminar_' + i + '.jpg';
      const caption = this.caption[i];
      const thumb = '../../../assets/seminar_' + i + '.jpg';
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
