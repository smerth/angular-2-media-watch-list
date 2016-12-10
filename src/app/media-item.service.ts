import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium: any) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaitems', { search: searchParams })
      .map(response => {
        return response.json().mediaItems;
      });
  }

  add(mediaItem: any) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => undefined);
  }

  delete(mediaItem: any) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => undefined);
  }
}
