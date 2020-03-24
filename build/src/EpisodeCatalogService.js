"use strict";
exports.__esModule = true;
var EpisodeCatalogService = (function () {
    function EpisodeCatalogService(repository) {
        this.repository = repository;
    }
    EpisodeCatalogService.prototype.get = function () {
        return this.repository.get();
    };
    EpisodeCatalogService.prototype.getById = function (id) {
        return this.repository.getById(id);
    };
    EpisodeCatalogService.prototype.add = function (episode) {
        return this.repository.add(episode);
    };
    EpisodeCatalogService.prototype.edit = function (id, episode) {
        return this.repository.edit(id, episode);
    };
    EpisodeCatalogService.prototype["delete"] = function (id) {
        return this.repository["delete"](id);
    };
    return EpisodeCatalogService;
}());
exports.EpisodeCatalogService = EpisodeCatalogService;
