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
  images = [1, 1, 1].map(n => `../../../assets/banner_bg.png`);

  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
    config.size = 'xl';
  }

  ngOnInit(): void {}

  public open(content) {
    this.modalService.open(content);
  }

  public ongetStartedClick() {
    this.router.navigate(['/terms-and-conditions']);
  }
}
