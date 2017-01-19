var c = document.getElementById("game");
var ctx = c.getContext("2d");

var player_x = 10;
var player_y = 450;
var player_width = 20;
var player_height = 20;
var player_image = new Image();
player_image.src = "./img/banana1.jpg";

var cpu_image = new Image();
cpu_image.src = "./img/katana.jpg";

var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

var speed = 5;

var cpu_x = 5;
var cpu_y = 5;

var d = new Date();
var n = d.getMilliseconds();

var CANVAS_WIDTH = 200;
var CANVAS_HEIGHT = 500;

function clear() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function detectCollision(x, x1, y, y1, height, height1, width, width1){
    var left1, left2;
    var right1, right2;
    var top1, top2;
    var bottom1, bottom2;

    left1 = x;
    left2 = x1;
    right1 = x + width;
    right2 = x1 + width1;
    top1 = y;
    top2 = y1;
    bottom1 = y + height;
    bottom2 = y1 + height1;

    if (bottom1 < top2) return false;
    if (top1 > bottom2) return false;

    if (right1 < left2) return false;
    if (left1 > right2) return false;

    return true;
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
	console.log(CANVAS_WIDTH);

	clear();


    cpu_y += 5;

    detectCollision(cpu_x, player_x, cpu_y, player_y, cpu_width, player_width, cpu_height, player_height);

	ctx.drawImage(cpu_image, cpu_x, cpu_y, 20, 20);
	ctx.drawImage(player_image, player_x, player_y, player_width, player_height	);
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
