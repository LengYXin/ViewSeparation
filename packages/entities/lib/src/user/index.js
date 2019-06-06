"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
/**
 * 用户实体
 */
var EntitiesUserStore = /** @class */ (function () {
    function EntitiesUserStore() {
        this.name = "名字123";
    }
    EntitiesUserStore.prototype.onUpdate = function (name) {
        this.name = name;
        console.log("TCL: UserStore -> onUpdate -> name", name);
    };
    __decorate([
        mobx_1.observable
    ], EntitiesUserStore.prototype, "name", void 0);
    __decorate([
        mobx_1.action
    ], EntitiesUserStore.prototype, "onUpdate", null);
    return EntitiesUserStore;
}());
exports.EntitiesUserStore = EntitiesUserStore;
// export default new EntitiesUserStore();
//# sourceMappingURL=index.js.map