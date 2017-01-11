var bank = {
	addUnreasonableFees: function(account, amount){
		account.money = account.money - amount
	}
}

bank["5"] = {
	money: 0,
	acctNumber: "5",
	type: "checking",
	withdraw: function(amt){
		bank["5"].money = bank["5"].money - amt;
	},
	deposit: function(amt){
		bank["5"].money = bank["5"].money + amt;
	},
	close: function(){
		delete bank["5"]
	},
	checkAmount: function(){
		console.log("account has " + bank["5"].money)
	}
}


bank["5"].deposit(20);
bank["5"].checkAmount();
bank["5"].withdraw(10);
bank["5"].checkAmount();
bank.addUnreasonableFees(bank["5"], 500)
bank["5"].checkAmount();
bank["5"].close();
