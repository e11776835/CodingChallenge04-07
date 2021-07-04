import {Component, HostListener, OnInit} from '@angular/core';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public giphyService: GiphyService) {
  }

  giphyFavs: Map<string, string> = new Map();

  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.giphyService.next();
    }
  }

  ngOnInit() {
    if (localStorage.getItem('giphyFavs') != null) {
      this.giphyFavs = JSON.parse(localStorage.getItem('giphyFavs'));
    }
  }

  addToFavs(result): void {
    this.giphyFavs.set(result.title, result.images.fixed_width.url);
    localStorage.setItem('giphyFavs', JSON.stringify(this.giphyFavs));
  }
}
