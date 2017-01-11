var gas = 15;
var prius = {
	color: 'red',
	speed: 55,
	tank: 10,
	gas: 32,
	fuelLeft: function(){
		console.log(this.gas);
	}
};
prius.fuelLeft();//32
console.log(this.gas);//15
var inter = prius.fuelLeft.bind(prius);
inter();
