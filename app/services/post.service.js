"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/operator/map");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
        // 	this.posts=[{tittle:'hello bengalore',body:'hello janeesha putta!!!'},
        // 	           {tittle:'hello mandya',body:'hello asha!!!'},
        // 	           {tittle:'hell mysore',body:'im commig'},
        // 	           {tittle:'hi',body:"im comming"}]
    }
    PostService.prototype.getPosts = function () {
        return this
            ._http
            .get(this.apiUrl)
            .map(function (response) {
            return response.json();
        });
        // return this.posts;
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map