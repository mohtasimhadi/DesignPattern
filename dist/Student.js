"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
        var _this = this;
        this.data = {};
        this.showTime = function () {
            return _this.data.getTime.toLocaleString();
        };
        this.showOthers = function () {
            return "Course No: " + _this.data.getCourseNumber + "\n"
                + ("Topic: " + _this.data.getTopicName + "\n")
                + ("Teacher: " + _this.data.getTeacherName);
        };
        this.show = function () {
            console.log("Student View:");
            console.log(_this.showOthers());
            console.log(_this.showTime());
        };
    }
    Student.prototype.update = function (data) {
        this.data = data;
    };
    return Student;
}());
exports["default"] = Student;
