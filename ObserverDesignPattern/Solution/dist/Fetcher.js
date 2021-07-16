"use strict";
exports.__esModule = true;
var Fetcher = /** @class */ (function () {
    function Fetcher(observers, data) {
        var _this = this;
        this.fetch = function () {
            _this.observers.forEach(function (observer) {
                observer.update(_this.data);
            });
        };
        this.observers = observers;
        this.data = data;
    }
    return Fetcher;
}());
exports["default"] = Fetcher;
