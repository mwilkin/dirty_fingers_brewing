System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var KegListComponent, AppComponent, Keg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                }
                KegListComponent.prototype.kegClicked = function (clickedKeg) {
                    console.log(clickedKeg);
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        template: "\n  <h3 *ngFor=\"#currentKeg of kegList\" (click)=\"kegClicked(currentKeg)\">\n    {{ currentKeg.name }}\n  </h3>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new Keg("Chainring Ale", 0),
                        new Keg("Breakline IPA", 1),
                        new Keg("Handle Bar Stout", 2),
                        new Keg("Saddle Sour", 3)
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log(clickedKeg);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <h1>Dirty Fingers Brewing</h1>\n      <keg-list [kegList]=\"kegs\"></keg-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Keg = (function () {
                function Keg(name, id) {
                    this.name = name;
                    this.id = id;
                }
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=app.component.js.map