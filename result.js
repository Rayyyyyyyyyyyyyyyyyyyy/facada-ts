"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return Circle.PI * (Math.pow(radius, 2));
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function area(width, heigh) {
            return width * heigh;
        }
        Rectangle.area = area;
        function circumference(width, height) {
            return 2 * (width + height);
        }
        Rectangle.circumference = circumference;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
/// <reference path="./MyMath/Circle.ts" />
/// <reference path="./MyMath/Rectangle.ts" />
console.log(MyMath.Circle.PI);
console.log(MyMath.Circle.area(10));
console.log(MyMath.Circle.circumference(20));
console.log(MyMath.Rectangle.area(10, 20));
console.log(MyMath.Rectangle.circumference(50, 100));
//# sourceMappingURL=result.js.map