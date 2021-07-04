import {Component, OnInit} from '@angular/core';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string;

  constructor(private giphyService: GiphyService) {
  }

  ngOnInit() {
  }

  searchGif(): void {
    this.giphyService.search(this.searchTerm);
  }
}
