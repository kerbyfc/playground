({
	"delay": function (resolve, reject) {
		var XBomb = function () {
			Bomb.apply(this, arguments);
		};

		XBomb.prototype = Object.create(Bomb.prototype);
		XBomb.prototype.blowUp = reject.bind({}, "fail");

		new XBomb("OK", .01);
		setTimeout(resolve.bind({}, true), 1);
	},

	"message": function (resolve) {
		var XBomb = function () {
			Bomb.apply(this, arguments);
		};

		XBomb.prototype = Object.create(Bomb.prototype);

		XBomb.prototype.blowUp = function () {
			resolve(["OK", this.message]);
		};

		new XBomb("OK", .01);
	}
})
