"use strict";
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
})(Rectangle || (Rectangle = {}));
//# sourceMappingURL=Rectangle.js.map