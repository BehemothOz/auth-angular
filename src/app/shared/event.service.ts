import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {

  private _eventsURl = 'http://localhost:3344/api/events';
  private _specialEventsURl = 'http://localhost:3344/api/special';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsURl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsURl);
  }
}
