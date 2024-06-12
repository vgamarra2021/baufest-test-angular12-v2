import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-nav-button',
  templateUrl: './search-nav-button.component.html',
  styles: [
    `
      a {
        background-image: url('src/assets/imgs/bg-green.webp');
        background-size: cover;
        filter: grayscale(100%);
      }
      a:hover {
        filter: grayscale(60%);
        box-shadow: 0px 0px 4px #fff;
      }
      a.active {
        filter: grayscale(40%);
      }
      p {
        text-shadow: 0 0 black;
      }
    `,
  ],
})
export class SearchNavButtonComponent {
  @Input() title: string = '';
  @Input() value: string = '';
}
