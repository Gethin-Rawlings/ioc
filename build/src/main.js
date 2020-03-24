"use strict";
exports.__esModule = true;
var Installer_1 = require("./Installer");
var Identifiers_1 = require("./Identifiers");
var EpisodeCatalogService_1 = require("./EpisodeCatalogService");
var episodeRepoo = Installer_1["default"].get(Identifiers_1["default"].IEpisodeRepository);
var service = new EpisodeCatalogService_1.EpisodeCatalogService(episodeRepoo);
console.log(service.get());
