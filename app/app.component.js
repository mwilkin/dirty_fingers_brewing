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
    var KegComponent, KegListComponent, AppComponent, Keg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                }
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-display',
                        inputs: ['keg'],
                        template: "\n    <h3>\n      {{ keg.name }}\n    </h3>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
            KegListComponent = (function () {
                function KegListComponent() {
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegListComponent.prototype.kegClicked = function (clickedKeg) {
                    console.log(clickedKeg, "child");
                    this.selectedKeg = clickedKeg;
                    this.onKegSelect.emit(clickedKeg);
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        outputs: ['onKegSelect'],
                        directives: [KegComponent],
                        template: "\n  <keg-display *ngFor=\"#currentKeg of kegList\"\n    (click)=\"kegClicked(currentKeg)\"\n    [class.selected]=\"currentKeg === selectedKeg\"\n    [keg]=\"currentKeg\">\n  </keg-display>\n  "
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
                        new Keg("Saddle Sour", 3),
                        new Keg("Shaddow DOM Porter", 4)
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log(clickedKeg, "parent");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [KegListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>Bent Spoke Brewing</h1>\n      <keg-list\n        [kegList]=\"kegs\"\n        (onKegSelect)=\"kegWasSelected($event)\">\n      </keg-list>\n    </div>\n  "
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