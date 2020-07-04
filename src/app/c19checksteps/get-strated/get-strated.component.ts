import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-get-strated',
  templateUrl: './get-strated.component.html',
  styleUrls: ['./get-strated.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class GetStratedComponent implements OnInit {
  images = [1, 2, 3, 4].map(n => `../../../assets/bg_` + n + `.png`);

  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
    config.size = 'xl';
    config.windowClass = 'youtube_modal';
  }

  ngOnInit(): void {}

  public open(content) {
    this.modalService.open(content);
  }


  public register() {
    this.router.navigate(['/register']);
  }

  public redirect(data){
    if (data === 'health'){
      this.router.navigate(['/health']);
    } else if (data === 'concept'){
      this.router.navigate(['/universalconcept']);
    }
  }
}
