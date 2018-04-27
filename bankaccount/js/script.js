/*eslint-env browser*/

var $ = function (id) {
	"use strict";
	return window.document.getElementById(id);
};


var ownerName, depositAmount, withdrawalAmount;


var displayMsg = function (message) {
	"use strict";
	$('div').innerHTML = message;
};

function validate(amount) {
    "use strict";
    if (isNaN(amount) || amount === null) {
        window.alert("Not a number! Enter a number please.");
		return false;
    } else if (amount < 0) {
		window.alert("Enter a positive amount.");
		return false;
	} else {
		return true;
	}
}

function bankAccount(ownerName) {
	"use strict";
	
	var balance = 0;
	var owner = ownerName;
	return {
		withdrawal: function (withdrawalAmount) {
			if (withdrawalAmount > balance) {
				window.alert("You can't withdrawal: " + withdrawalAmount + "\nNot enough funds on your account.");
			} else {
				balance -= withdrawalAmount;
				displayMsg(this.getOwnerName() + "'s account balance is " + this.getBalance());
			}
		},
		
		deposit: function (depositAmount) {
			balance += depositAmount;
			displayMsg(this.getOwnerName() + "'s account balance is " + this.getBalance());
		},
		
		getBalance: function () {
			return balance;
		},
		
		getOwnerName: function () {
			return owner;
		}
	};
}

window.addEventListener("load", function () {
    "use strict";
	var userAccount;
	$('name').addEventListener("click", function () {
		ownerName = window.prompt("Enter your name:");
		userAccount = bankAccount(ownerName);
	});
	$('deposit').addEventListener("click", function () {
		
		
		if (userAccount === undefined) {
			return window.alert('Owner is undefined. \nEnter your name please.');
		}
		
		
		do {
			depositAmount = parseFloat(window.prompt("Enter an amount to deposit:"));
		} while (validate(depositAmount) === false);
		userAccount.deposit(depositAmount);
	});
	$('withdrawal').addEventListener("click", function () {
		
		
		if (userAccount === undefined) {
			return window.alert('Owner is undefined. \nEnter your name please.');
		}
		
		
		do {
			withdrawalAmount = parseFloat(window.prompt("Enter an amount to withdrawal:"));
		} while (validate(withdrawalAmount) === false);
		userAccount.withdrawal(withdrawalAmount);
	});
});




