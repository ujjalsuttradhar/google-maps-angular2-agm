import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getLocations() {
        var data = this.http.get('./assets/locations.json');

        return data;
    }
}
