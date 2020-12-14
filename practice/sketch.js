const sketch = function (p) {
    p.x = 100;
	p.y = 100;

	p.setup = function () {
		p.createCanvas(200, 200)
		p.background(100);
	};

};
	
let myp5v1 = new p5(sketch, 'sketch1')
let myp5v2 = new p5(sketch, 'sketch2')

myp5v1.draw = function () {
	myp5v1.fill(255);
	myp5v1.rect(myp5v1.x, myp5v1.y, 50, 50)
};

myp5v2.draw = function () {
	myp5v2.ellipse(myp5v2.x, myp5v2.y, 20, 20);
	myp5v2.x += myp5v2.random(-3,3);
	myp5v2.y += myp5v2.random(-3,3)
}


// let myp5v1 = new p5(( sketch ) => {
	
// 	let x = 100;
// 	let y = 100;

// 	sketch.setup = () => {
//       sketch.createCanvas(200, 200);
// 	};
	
// 	sketch.draw = () => {
// 		sketch.background(0);
// 		sketch.fill(255);
// 		sketch.rect(x,y,50,50);
// 	};
// }, 'sketch1');

// let myp5v2 = new p5(( sketch ) => {

// 	let x = 100;
// 	let y = 100;

// 	sketch.setup = () => {
// 		sketch.createCanvas(200, 200);
// 		txt = sketch.createP('some text');
// 		txt.style("text-align", "center");
// 		txt.style("backgound-color", "pink");
// 		txt.mouseOver(changeStyle);
// 		txt.mouseOut(revertStyle);
// 	};
	
// 	sketch.draw = () => {
// 		sketch.background(0);
// 		sketch.fill("#F55");
// 		sketch.ellipse(x,y,50,50);
// 	};
	
// 	function changeStyle () {
// 		txt.style("background-color", "purple")
// 		txt.style("padding", "24px")
// 	};

// 	function revertStyle () {
// 		txt.style("background-color", "pink")
// 		txt.style("padding", "8px")
// 	}
	
// }, 'sketch2');

