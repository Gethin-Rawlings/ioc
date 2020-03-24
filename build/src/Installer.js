"use strict";
exports.__esModule = true;
require("reflect-metadata");
var inversify_1 = require("inversify");
var Identifiers_1 = require("./Identifiers");
var EpisodeCatalog_1 = require("./EpisodeCatalog");
var container = new inversify_1.Container();
container.bind(Identifiers_1["default"].IEpisodeRepository).to(EpisodeCatalog_1.EpisodeCatalog);
exports["default"] = container;
