#pragma strict

var tapEffect 	: GameObject;


function Click(){
	var effect = Instantiate(tapEffect, Vector3(transform.position.x, transform.position.y, transform.position.z + 10), Quaternion.identity);
	effect.gameObject.transform.parent = gameObject.transform;
}

function Awake(){
	tapEffect = Resources.Load("tapEffect");
}

function Start () {

}

function Update () {

}