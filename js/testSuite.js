define(function () {
	var stringify = JSON.stringify;


	// Export
	return {
		run: function (suite) {
			var el = this.el,
				init = true;

			Object.keys(suite).forEach(function (text) {
				var fn = suite[text], res;

				try {
					if (fn.length > 0) {
						res = new Promise(fn);
					}
					else {
						res = fn();
					}
				} catch (err) {
//					console.log(err);
				}


				function add(res) {
					if (el) {
						if (init) {
							init = false;
							el.innerHTML = '';
						}

						var state = !!(res && !res.stack && !res.message && (res === true || stringify(res[0]) == stringify(res[1])));

						el.innerHTML += '<div class="' + state + '">'
							+ text
							+ ': ' + (res === true || (res && res.join && res.map(function (val) {
								return val === null ? 'null' : stringify(val);
							}).join(' === ')))
							+ '</div>'
						;
					}
				}

				this._cancel = function () {
					el = null;
				};

				if (res && res.then) {
					res.then(add, add);
				} else {
					add(res);
				}
			});
		},

		cancel: function () {
			this._cancel && this._cancel();
		}
	};
});
