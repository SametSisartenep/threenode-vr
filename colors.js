var COLOR = {
	black: "\033[0;30m",
	white: "\033[0;37m",
	red: "\033[0;31m",
	green: "\033[0;32m",
	yellow: "\033[0;33m",
	blue: "\033[0;34m",
	magenta: "\033[0;35m",
	cyan: "\033[0;36m",
	reset: "\033[0m"
}

function paint ( text, color ) {
	return color + text + COLOR.reset;
}

module.exports.load = function () {
	// COLORS
	String.prototype.black = function () {
		return paint(this, COLOR.black);
	}

	String.prototype.white = function () {
		return paint(this, COLOR.white);
	}

	String.prototype.red = function () {
		return paint(this, COLOR.red);
	}

	String.prototype.green = function () {
		return paint(this, COLOR.green);
	}

	String.prototype.yellow = function () {
		return paint(this, COLOR.yellow);
	}

	String.prototype.blue = function () {
		return paint(this, COLOR.blue);
	}

	String.prototype.magenta = function () {
		return paint(this, COLOR.magenta);
	}

	String.prototype.cyan = function () {
		return paint(this, COLOR.cyan);
	}
}