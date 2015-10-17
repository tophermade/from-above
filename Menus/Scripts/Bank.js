#pragma strict


var balance 		: int;


function Deposit(depositAmount : int){
	balance = balance+depositAmount;
	PlayerPrefs.SetInt("Balance", balance + depositAmount);
}



function Withdraw(withdrawalAmount : int){
	balance = balance - withdrawalAmount;
	PlayerPrefs.SetInt("Balance", balance - withdrawalAmount);
}



function Start () {

	if(PlayerPrefs.HasKey("Balance")){
		balance = PlayerPrefs.GetInt("Balance");
	} else {
		balance = 0;
		PlayerPrefs.SetInt("Balance", balance);
	}

}

function Update () {

}