import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  constructor() {
  }

  giphyFavs: Map<string, string> = new Map();

  ngOnInit() {
    if (localStorage.getItem('giphyFavs') != null) {
      this.giphyFavs = JSON.parse(localStorage.getItem('giphyFavs'));
    }
  }

  removeFromFavs(result): void {
    this.giphyFavs.delete(result.title);
    localStorage.setItem('giphyFavs', JSON.stringify(this.giphyFavs));
  }
}
