"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone");
require("core-js/es7/reflect");
const platform_browser_1 = require("@angular/platform-browser");
const app_module_ngfactory_1 = require("./app.module.ngfactory");
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
