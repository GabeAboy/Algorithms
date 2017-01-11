function Bank (num,own,bal){
	this.num=num;
	this.own=own;
	this.bal=bal;
	this.add = function(add){
		this.bal+=add;
	},
	this.withdraw = function(amount){
		this.bal-=amount;
	},
	this.log = function(){
		console.log(this.own+": "+this.bal);}
  }

var gabe = new Bank(123,"Gabe",100);
var john = new Bank(456,"John",50);
gabe.add(25);
gabe.withdraw(50);
gabe.log();
