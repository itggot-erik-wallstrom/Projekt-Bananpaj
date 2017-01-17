/*
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
*/

var c = document.getElementById("game");
var ctx = c.getContext("2d");

var player_x = 10;
var player_y = 10;
var player_width = 20;
var player_height = 20;
var player_image = new Image();
player_image.src = "./img/banana1.jpg"

var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

var speed = 5;

var CANVAS_WIDTH = 200;
var CANVAS_HEIGHT = 100;

function clear() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update() {
	if(w_down) {
		player_y -= speed;
	}
	if(a_down) {
		player_x -= speed;
	}
	if(s_down) {
		player_y += speed;
	}
	if(d_down) {
		player_x += speed;
	}

	/*
	if(player_x + player_width > CANVAS_WIDTH) {
		player_x = CANVAS_WIDTH - player_width;
	}
	if(player_x < 0) {
		player_x = 0
	}
	if(player_y + player_height > CANVAS_HEIGHT) {
		player_y = CANVAS_HEIGHT - player_height;
	}
	if(player_y < 0) {
		player_y = 0
	}
	*/

	console.log(CANVAS_WIDTH);

	clear();
	/*
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(player_x, player_y, player_width, player_height);
	*/
	ctx.drawImage(player_image, player_x, player_y);
}

function on_key_down(event) {
	switch(event.keyCode) {
		case 87: // W
			w_down = true;
			break;
		case 65: // A
			a_down = true;
			break;
		case 83: // S
			s_down = true;
			break;
		case 68: // D
			d_down = true;
			break;
	}
}

function on_key_up(event) {
	switch(event.keyCode) {
		case 87: // W
			w_down = false;
			break;
		case 65: // A
			a_down = false;
			break;
		case 83: // S
			s_down = false;
			break;
		case 68: // D
			d_down = false;
			break;
	}
}

setInterval(update, 1000.0 / 60);
window.addEventListener("keydown", on_key_down, true);
window.addEventListener("keyup", on_key_up, true);
