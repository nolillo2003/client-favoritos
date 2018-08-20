import { Component, OnInit } from '@angular/core';

import { FavoritoService } from '../services/favorito.service';
import { Favorito } from '../models/favorito';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html',
    providers: [FavoritoService]
})


export class FavoritosListComponent implements OnInit {
    public title: string;
    public favoritos: Favorito[];
    private _favoritoService: FavoritoService
    public errorMessage;
    public loading: boolean;

    constructor(_favoritoService: FavoritoService) {
        this._favoritoService = _favoritoService;
        this.title = 'Listado de marcadores';
        this.loading = true;
    }

    ngOnInit() {
        this.getFavoritos();
    }

    getFavoritos(){
        console.log('FavoritosListComponent cargado!!');
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;

                if (!this.favoritos){                    
                    alert('Error en la API');
                } else {
                    this.loading = false;
                }
            },
            error => {
                this.loading = false;
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );        
    }

}

