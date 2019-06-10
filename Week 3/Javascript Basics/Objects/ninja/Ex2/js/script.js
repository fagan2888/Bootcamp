var painter = {
    color: "gold",
    amount: 0,
    circles: [],
    COLORS: ["lightblue", "lightpink", "coral", "gold", "wheat"],
    drawCircle: (color = painter.color) => {
        var circle = {
            color
        }
        painter.circles.push(circle);
        painter.amount++;
    },
    getBrush: (color) => {
        return {
            color, changeColor: (color) => painter.color = color
        }
    }
};

// var getBrush = (color) => {
//     return {
//         color, changeColor: () => painter.color = color
//     };
// }
// var drawCircle = (color = painter.color) => {
//     var circle = {
//         color
//     }
//     painter.circles.push(circle);
//     painter.amount++;
//     return circle;
// }

var createBrush = (numOfBrush) => {
    painter.BRUSHES = [];
    for (let i = 0; i < numOfBrush; i++) {
        painter.BRUSHES.push({
            color: painter.color,
            typeBrush: i
        })
    }
}
var createCircles = (numOfCircle) => {
    for (let i = 0; i < numOfCircle; i++) {
        var color = painter.COLORS[Math.floor(Math.random() * painter.COLORS.length)];
        //var brush = painter.BRUSHES.
        // painter.getBrush.changeColor(color);
        // painter.drawCircle(color);
    }
}
var changeThirdCicle = () => {
    painter.circles[2].color = painter.circles[0].color;
}

function test_equal(actual, expected, msg) {
    if (typeof expected === "object") {
        for (prop in expected) {
            test_equal(actual[prop], expected[prop]);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}

createCircles(10);
console.log("after crete circle:");
console.log(painter);
//painter.drawCircle();
test_equal(painter.circles[0].color === painter.circles[2].color, true)
var brush = painter.getBrush("coral");
test_equal(brush.color, "coral");
painter.color = "wheat";
brush.changeColor();
test_equal(painter.color, "coral");
var num_of_circles = painter.amount;
painter.drawCircle();
test_equal(painter.amount, num_of_circles + 1);
test_equal(painter.circles[painter.circles.length - 1], { color: "coral" });
