"use strict";
exports.__esModule = true;
var Data = /** @class */ (function () {
    function Data() {
        this.courseNumber = "";
        this.topicName = "";
        this.teacherName = "";
        this.time = new Date();
    }
    Data.prototype.getCourseNumber = function () {
        return this.courseNumber;
    };
    Data.prototype.setCourseNumber = function (courseNumber) {
        this.courseNumber = courseNumber;
    };
    Data.prototype.getTopicName = function () {
        return this.topicName;
    };
    Data.prototype.setTopicName = function (topicName) {
        this.topicName = topicName;
    };
    Data.prototype.getTeacherName = function () {
        return this.teacherName;
    };
    Data.prototype.setTeacherName = function (teacherName) {
        this.teacherName = teacherName;
    };
    Data.prototype.getTime = function () {
        return this.time;
    };
    Data.prototype.setTime = function (time) {
        this.time = time;
    };
    return Data;
}());
exports["default"] = Data;
