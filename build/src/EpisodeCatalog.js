"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var inversify_1 = require("inversify");
var Episode_1 = require("./Episode");
var EpisodeCatalog = (function () {
    function EpisodeCatalog() {
        this.episodeList = new Array(new Episode_1.Episode(1, 'Rose', 'Doctor Who series 1', 45), new Episode_1.Episode(2, 'The End of the World', 'Doctor Who series 1', 45), new Episode_1.Episode(3, 'Bad Wolf', 'Doctor Who series 1', 45), new Episode_1.Episode(4, 'Fear Her', 'Doctor Who series 2', 45), new Episode_1.Episode(5, 'Doomsday', 'Doctor Who series 2', 45));
    }
    EpisodeCatalog.prototype.get = function () {
        return this.episodeList;
    };
    EpisodeCatalog.prototype.add = function (Episode) {
        return this.episodeList.push(Episode);
    };
    EpisodeCatalog.prototype.edit = function (id, Episode) {
        var targetIndex = this.episodeList.findIndex((function (Episode) { return Episode.Id == id; }));
        this.episodeList[targetIndex].Series = Episode.Series;
        this.episodeList[targetIndex].Title = Episode.Title;
        this.episodeList[targetIndex].Duration = Episode.Duration;
        return this.episodeList[targetIndex];
    };
    EpisodeCatalog = __decorate([
        inversify_1.injectable()
    ], EpisodeCatalog);
    return EpisodeCatalog;
}());
exports.EpisodeCatalog = EpisodeCatalog;
