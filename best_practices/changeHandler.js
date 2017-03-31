// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
var coins = {
	'p' : 1,
	'n' : 5,
	'd' : 10,
	'q' : 25
};

var coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
	convertToChange : function(coinValue) {
		var changes = [];
		var initValue = coinValue;
		if(coinValue > 0)
			coinsByAmount.forEach(coin => {
				while(initValue - coins[coin] >= 0)
					{
						changes.push(coin);
						initValue = initValue - coins[coin];
					}
			})

	    return changes;
	},
}



