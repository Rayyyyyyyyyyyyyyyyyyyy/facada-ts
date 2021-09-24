"use strict";
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
//# sourceMappingURL=Rectangle.js.map