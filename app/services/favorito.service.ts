import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Favorito } from '../models/favorito';


@Injectable()
export class FavoritoService {
    public url: string;
    private _http: Http

    constructor(_http: Http) {
        this.url = 'http://localhost:3678/api/';
        this._http = _http;
    }

    //Array de Favorito
    getFavoritos() {
        return this._http.get(this.url + 'favoritos')
            .map(res => res.json());
    }

    //1 Favorito
    getFavorito(id: string) {
        return this._http.get(this.url + 'favorito/' + id)
            .map(res => res.json());
    }

    //Agregar Favorito
    addFavorito(favorito: Favorito) {
        let json: string = JSON.stringify(favorito);
        let params: string = json;
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + 'favorito', params, { 'headers': headers })
            .map(res => res.json());
    }
}