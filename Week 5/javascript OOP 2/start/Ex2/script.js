"user strict"
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(point){
      let sumPoints = new Point(this.x + point.x , this.y + point.y);
      return sumPoints;
    }
}
let point1 = new Point(3,0);
let point2 = new Point(4,3);
let point1AddPoint2 = point1.plus(point2);
console.log(point1AddPoint2);

