#pragma strict

var startedAt 			: float;
var score 				: int;


function StartRound(){
	startedAt = Time.time;
	score = 0;
}



function UpdateScore(){
	score ++;
}



function Start () {

}

function Update () {
	var possibleScore = Time.time - startedAt;
	if(possibleScore > score){
		UpdateScore();
	}

}