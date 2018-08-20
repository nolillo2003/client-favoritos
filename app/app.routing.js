"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./components/favoritos-list.component");
var favorito_detail_component_1 = require("./components/favorito-detail.component");
var favorito_add_component_1 = require("./components/favorito-add.component");
var favorito_edit_component_1 = require("./components/favorito-edit.component");
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favorito_detail_component_1.FavoritoDetailComponent },
    { path: 'crear-marcador', component: favorito_add_component_1.FavoritoAddComponent },
    { path: 'editar-marcador/:id', component: favorito_edit_component_1.FavoritoEditComponent },
    // ** es para indicar la ruta del 404
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map