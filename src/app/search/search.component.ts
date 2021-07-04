import {Component, HostListener, OnInit} from '@angular/core';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.giphyService.next();
    }
  }

  constructor(public giphyService: GiphyService) { }

  ngOnInit() {
  }

}
