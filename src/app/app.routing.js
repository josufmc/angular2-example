"use strict";
var router_1 = require("@angular/router");
var restaurantes_list_component_1 = require("./components/restaurantes-list.component");
var restaurantes_detail_component_1 = require("./components/restaurantes-detail.component");
var restaurantes_add_component_1 = require("./components/restaurantes-add.component");
var restaurantes_edit_component_1 = require("./components/restaurantes-edit.component");
var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: restaurantes_list_component_1.RestaurantesListComponent },
    { path: 'restaurante/:id', component: restaurantes_detail_component_1.RestaurantesDetailComponent },
    { path: 'crear-restaurante', component: restaurantes_add_component_1.RestaurantesAddComponent },
    { path: 'editar-restaurante/:id', component: restaurantes_edit_component_1.RestaurantesEditComponent },
    { path: 'donde-como-hoy/:random', component: restaurantes_detail_component_1.RestaurantesDetailComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map