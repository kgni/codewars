// May 14, 2022

/*
ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

const Ball = function (ballType = 'regular') {
	this.ballType = ballType;
};
