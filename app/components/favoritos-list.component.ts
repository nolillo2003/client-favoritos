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
    public errorMessage;

    constructor(private _favoritoService: FavoritoService) {
        this.title = 'Listado de marcadores';
    }

    ngOnInit() {
        console.log('FavoritosListComponent cargado!!');
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;

                if (!this.favoritos){
                    alert('Error en la API');
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );
    }


}

