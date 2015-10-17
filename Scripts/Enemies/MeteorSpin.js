#pragma strict

var rotationAmount 		: float = 0;

function Start () {
	if(rotationAmount == 0){
		rotationAmount = Random.Range(0.000, 145.000);
	}
}

function Update () {
	transform.Rotate (0, 0, rotationAmount * Time.deltaTime);
}