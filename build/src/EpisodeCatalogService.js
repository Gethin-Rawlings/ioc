"use strict";
exports.__esModule = true;
var EpisodeCatalogService = (function () {
    function EpisodeCatalogService(repository) {
        this.repository = repository;
    }
    EpisodeCatalogService.prototype.get = function () {
        return this.repository.get();
    };
    EpisodeCatalogService.prototype.add = function (episode) {
        return this.repository.add(episode);
    };
    EpisodeCatalogService.prototype.edit = function (id, episode) {
        return this.repository.edit(id, episode);
    };
    return EpisodeCatalogService;
}());
exports.EpisodeCatalogService = EpisodeCatalogService;
