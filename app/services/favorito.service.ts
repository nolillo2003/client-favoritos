import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Favorito } from '../models/favorito';

@Injectable()
export class FavoritoService {
    private _http: Http;
    public url: string;

    constructor(http: Http) {
        this.url = 'http://localhost:3678/api/';
        this._http = http;
    }

    getFavoritos() {
        return this._http.get(this.url + 'favoritos').map(res => res.json());
    }


}