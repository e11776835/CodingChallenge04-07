// https://stackblitz.com/edit/giphy-search?file=README.md

export interface GiphyResult {
  data: Array<GifData>;
  pagination: {
    count: number;
    offset: number;
  };
}

export interface GifData {
  images: {
    fixed_width: {
      url: string;
    };
  };
  title: string;
}

export interface SearchRequest {
  searchTerm: string;
  offset: number;
  pageSize: number;
}
