import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HotelService {
    private base_url: string;

    constructor(private http: Http) {
        this.base_url = environment.base_url;
    }

    error(error: any) {
        return Promise.reject(error.message || error);
    }

    success(succes: any) {
        return Promise.resolve(succes);
    }

    findHotels(query: any) {
        const url = this.base_url + "/v1/hotels/search";
        const headers = new Headers();
        const params = new URLSearchParams();
        if (query.name) {
            params.set('name', query.name);
        }
        if (query.stars) {
            params.set('stars', query.stars);
        }
        params.set('page', '1'); // TEST
        params.set('limit', Number.MAX_SAFE_INTEGER.toString()); // TEST
        const options = new RequestOptions({ headers, search: params });
        return this.http.get(url, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }
}