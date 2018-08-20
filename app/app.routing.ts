import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { FavoritosListComponent} from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add.component';
import { FavoritoEditComponent } from './components/favorito-edit.component';

const appRoutes: Routes = [
    {path: '',component: FavoritosListComponent},
    {path: 'marcador/:id', component: FavoritoDetailComponent},
    {path: 'crear-marcador', component: FavoritoAddComponent},
    {path: 'editar-marcador/:id', component: FavoritoEditComponent},
    // ** es para indicar la ruta del 404
    {path: '**',component: FavoritosListComponent},    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);