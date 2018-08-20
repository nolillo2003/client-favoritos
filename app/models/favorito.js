"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Favorito = /** @class */ (function () {
    function Favorito(_id, title, description, url) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
    Favorito.prototype.getTitle = function () {
        return this.title;
    };
    Favorito.prototype.setTitle = function (title) {
        this.title = title;
    };
    Favorito.prototype.getDescription = function () {
        return this.description;
    };
    Favorito.prototype.setDescription = function (description) {
        this.description = description;
    };
    Favorito.prototype.getUrl = function () {
        return this.url;
    };
    Favorito.prototype.setUrl = function (url) {
        this.url = url;
    };
    return Favorito;
}());
exports.Favorito = Favorito;
//# sourceMappingURL=favorito.js.map