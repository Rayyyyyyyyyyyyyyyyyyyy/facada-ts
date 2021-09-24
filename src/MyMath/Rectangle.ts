namespace MyMath {
    export namespace Rectangle {
        export function area(width: number, heigh: number) {
            return width * heigh
        }
        export function circumference(width: number, height: number) {
            return 2 * (width + height)
        }
    }
}