import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-universal-concept-view',
  templateUrl: './universal-concept-view.component.html',
  styleUrls: ['./universal-concept-view.component.scss']
})
export class UniversalConceptViewComponent implements OnInit {


  albumArr = [];
  caption = ['', 'Natural Treatment For Healthcare Free of Charge', 'Quality education centre for members’ Children', 'Meditation and Yoga Classes', 'Recreational Centre', 'AKUC Guest House for members vacation/relaxation/recreation with playground and swimming  pool', 'Swimming Pool', 'Nursing Home', 'Free Welfare Service', 'Self Defence Classes'];

  constructor(
    private lightbox: Lightbox
  ) {

    for (let i = 1; i <= 9; i++) {
      const src = '../../../assets/akuc' + i + '.jpg';
      const caption = this.caption[i];
      const thumb = '../../../assets/akuc' + i + '.jpg';
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
