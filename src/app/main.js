"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../polyfills");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
console.log('Entry Point...');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (e) {
    console.log('Bootstrap Error', e);
});